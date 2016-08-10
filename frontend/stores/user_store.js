const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserStore = new Store(AppDispatcher);

let _users = {};

UserStore.all = function () {
  return Object.keys(_users).map( (key) => {
    return _users[key];
  });
};

UserStore.find = function (id) {
  return _users[id];
};

UserStore.addUser = function (user) {
  _users[user.id] = user;
};

UserStore.removeUser = function (user) {
  delete _users[user.id];
};

UserStore.addManyUsers = function (users) {
  _users = {};

  users.forEach( (user) => {
    _users[user.id] = user;
  });
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVED_USERS:
      UserStore.addManyUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVED_USER:
      UserStore.addUser(payload.user);
      UserStore.__emitChange();
      break;
    // case PostConstants.REMOVED_USER:
    //   UserStore.removePost(payload.user);
    //   UserStore.__emitChange();
    //   break;
  }
};

module.exports = UserStore;
