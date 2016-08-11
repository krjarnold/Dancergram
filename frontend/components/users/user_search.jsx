const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;



const UserSearch = React.createClass({

  getInitialState() {
    return( {users: [],
      filteredUsers: [],
      searchText: "" } );
  },

  componentDidMount() {
    this.token = UserStore.addListener(this.getUsers);
    UserActions.fetchUsers();
  },

  componentWillUnmount() {
    this.token.remove();
  },

  getUsers() {
    this.setState( {users: UserStore.all() });
  },

  handleClick() {
    this.setState({users: [],
      filteredUsers: [],
      searchText: "" });
    // hashHistory.push(`users/${id}`);
  },

  filterUsers(e) {
    e.preventDefault();
    let filtered = this.state.users.filter( (user) => {
      const username = user.username.toLowerCase();
      const fullName = user.full_name.toLowerCase();
      const typing = e.currentTarget.value.toLowerCase();
      return( username.includes(typing) || fullName.includes(typing) );
    });

    this.setState({ filteredUsers: filtered, searchText: e.currentTarget.value });
  },

  render() {
    // if (this.state.users.length === 0 && this.state.searchText === "") {
    //   return <div>Loading!</div>;
    // }

    let userList =[];
     if (this.state.searchText !== "") {
        userList = this.state.filteredUsers.map( (user, i) => {
          return (
          <li className="search-bar-list" key={i} >
            <Link onChange={this.handleClick} to={`users/${user.id}`}>
              <div>
                <p className="search-bar-username">{user.username}</p>
                <p className="search-bar-fullname">{user.full_name}</p>
              </div>
            </Link>
          </li>
          );
        });
      } else if (userList.length === 0 && this.state.searchText !== "") {
          userList= <li>No results found</li>;
      } else {
          userList= [];
      }



        return (
          <div className="search-bar-container">
            <input className="search-bar"
              type="search"
              onChange={this.filterUsers}
              value={this.state.searchText}
              placeholder="Search">
            </input>
            <div className="search-bar-results">
              {userList}
            </div>
          </div>
        );
      }

});

module.exports = UserSearch;
