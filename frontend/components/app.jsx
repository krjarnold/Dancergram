const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const UserSearch = require('./users/user_search');

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
    // debugger
    return (
      <div className="app-container">
        <header className="header">
          <nav className="nav" >
            <Link className="nav-logo" to="/">Dancergram</Link>
            <UserSearch />
            <div className="nav-links">
              <Link className="nav-profile"to={`users/${window.currentUser.id}`}>
                <img className="nav-profile-image" src={DancergramAssets.profileLink} alt="Profile"></img>
              </Link>
              <button className="nav-logout" onClick={this._handleLogOut}>Logout</button>
            </div>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
