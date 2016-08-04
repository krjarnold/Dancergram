const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut() {
    SessionActions.logOut();
  },

  render() {
    return (
      <div>
        <h1>Dancergram</h1>
        <div className= "login-signup">
          navbar
        </div>
        <button onClick={this._handleLogOut}>Logout</button>
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
