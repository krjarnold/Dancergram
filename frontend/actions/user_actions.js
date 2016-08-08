const UserApiUtil = require('../util/user_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const hashHistory = require('react-router').hashHistory;

const UserActions = {
  fetchUsers() {
    UserApiUtil.fetchUsers(this.receiveAll);
  },

  getUser(id) {
    UserApiUtil.getUser(id, this.receiveUser);
  },

// Not implemented yet
  // editUser(data, id) {
  //   UserApiUtil.updateUser(data, id, this.receiveUser);
  // },

// Probably not using this feature
  // deleteUser(id) {
  //   UserApiUtil.deleteUser(id, this.removeUser);
  // },

  receiveAll (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVED_USERS,
      users: users
    });
  },

  receiveUser (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVED_USER,
      user: user
    });
  },

  // removeUser (user) {
  //   AppDispatcher.dispatch({
  //     actionType: UserConstants.REMOVED_USER,
  //     user: user
  //   });
  // }

};

module.exports = UserActions;
