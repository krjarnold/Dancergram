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
    let currentUser = SessionStore.currentUser();
    return (
      <div className="app-container">
        <header className="header">
          <nav className="nav" >
            <div className="nav-logo">
              <img className="nav-logo-image" src={DancergramAssets.logo} alt="Logo"></img>
              <Link className="nav-logo-link" to="/">Dancergram</Link>
            </div>
            <UserSearch />
            <div className="nav-links">
              <Link className="nav-profile"to={`users/${currentUser.id}`}>
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
