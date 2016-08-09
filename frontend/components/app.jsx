const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const App = React.createClass({

  componentDidMount() {
    this.token = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.token.remove();
  },

  _handleLogOut() {
    SessionActions.logOut();
  },

  render() {
    return (
      <div className="app-container">
        <nav className="nav" >
          <Link className="nav-logo" to="/">Dancergram</Link>
          <Link className="nav-profile"to={`users/${window.currentUser.id}`}>
            <img className="nav-profile-image" src={DancergramAssets.profileLink} alt="Profile"></img>
          </Link>
          <button onClick={this._handleLogOut}>Logout</button>
        </nav>
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
