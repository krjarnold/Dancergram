const FollowApiUtil = require('../util/follow_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const hashHistory = require('react-router').hashHistory;

const FollowActions = {
  createFollow(data) {
    FollowApiUtil.createFollow(data, this.receiveFollow);
  },

  // deletePost(id) {
  //   PostApiUtil.deletePost(id, this.removePost);
  // },


  receiveFollow () {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVED_USER
    });
  },
  
  //
  // removePost (post) {
  //   AppDispatcher.dispatch({
  //     actionType: PostConstants.REMOVED_POST,
  //     post: post
  //   });
  // }

};

module.exports = FollowActions;
