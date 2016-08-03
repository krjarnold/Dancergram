const React = require('react');
const ReactRouter = require('react-router');
const Link = require('react-router').Link;
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

  // ###Figure out what this is doing specifically in the router history
  // contextTypes: {
	// 	router: React.PropTypes.object.isRequired
	// },

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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">Welcome to Dancergram
        <br/>
        <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.inputHandler("username")}
            className="login-input"/>
        </label>

        <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.inputHandler("password")}
            className="login-input" />
        </label>
        <br/>
        <input type="submit" value="Submit"/>
        <br/>
        Don't have an account? <Link to="signup">Sign up</Link>
      </form>
      </div>
    );
  }

});

module.exports = LoginForm;
