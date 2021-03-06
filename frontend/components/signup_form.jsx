const React = require('react');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignUpForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: "",
      full_name: ""
    };
  },

  componentDidMount() {
    this.errorToken = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionToken = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorToken.remove();
    this.sessionToken.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },

  errors() {
    const errors = ErrorStore.errors("signup");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={i}>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  guestSubmit(e) {
    e.preventDefault();
    SessionActions.logIn({
      username: "ILoveDance",
      password: "qwerty"
    });
  },

  inputHandler(property, e) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {

    return (
      <div className="page">
        <div className="login">
          <img className="login-image" src={DancergramAssets.phoneImage} alt="Phone"></img>
            <div className="sign-up-wrapper">
              <div className="signup-form-container">
                <h1 className="signup-header">Dancergram</h1>
                <h3>Sign up to see photos from your dance friends.</h3>
                <input onClick={this.guestSubmit} className="guest-login-signup" type="submit" value="Log in with Guest Account" />
                <div className="divider-container-signup">
                  <div className="divider-signup"></div>
                  <text className="divider-text-signup">OR</text>
                </div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                  <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.inputHandler("username")}
                    className="signup-input"/>
                <br/>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={this.state.full_name}
                    onChange={this.inputHandler("full_name")}
                    className="signup-input"/>
                <br/>
                  <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.inputHandler("password")}
                    className="signup-input" />
                <br/>
                  <input className="signup-button" type="submit" value="Sign Up"/>
                </form>
                <div className="signup-errors">{this.errors()}</div>
            </div>
            <div className="login-container">
              <text className="login-text">Already a user?</text>
              <Link to="/">Login Instead</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignUpForm;
