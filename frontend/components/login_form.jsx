const React = require('react');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: ""
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
    SessionActions.logIn(this.state);
  },

  guestSubmit(e) {
    e.preventDefault();
    SessionActions.logIn({
      username: "ILoveDance",
      password: "qwerty"
    });
  },

  errors() {
    const errors = ErrorStore.errors("login");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={i}>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },


  inputHandler(property, e) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    return (
    <div className="page">
      <div className="login">
        <img className="login-image" src={DancergramAssets.phoneImage} alt="Phone"></img>
          <div className="login-form-container group">
            <h1>Dancergram</h1>
            <form onSubmit={this.handleSubmit} className="login-form-box group">
                <br/>
              <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.inputHandler("username")}
                className="login-input"/>
                  <br />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.inputHandler("password")} />
                  <br/>
              <input className="login-form-button" type="submit" value="Log in"/>
                <div className="divider-container">
                  <div className="divider"></div>
                  <text className="divider-text">OR</text>
                </div>
                <input onClick={this.guestSubmit} className="guest-login" type="submit" value="Log in with Guest Account" />
                <div className="login-errors">{this.errors()}</div>
                <br/>
              <div className="sign-up-container">
                <text className="sign-up-text">Don't have an account? </text>
                <Link to="signup">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
    </div>
    );
  }

});

module.exports = LoginForm;
