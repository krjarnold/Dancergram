const PostApiUtil = require('../util/post_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const PostConstants = require('../constants/post_constants');

const PostActions = {
  fetchPosts() {
    PostApiUtil.fetchPosts(this.receiveAll);
  },

  getPost(id) {
    PostApiUtil.getPost(id, this.receivePost);
  },

  createPost(data) {
    PostApiUtil.createPost(data, this.receivePost);
  },

  editPost(data) {
    PostApiUtil.updatePost(data, this.receivePost);
  },

  deletePost(id) {
    PostApiUtil.deletePost(id, this.removePost);
  },

  receiveAll (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVED_POSTS,
      posts: posts
    });
  },

  receivePost (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVED_POST,
      post: post
    });
  },

  removePost (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.REMOVE_POST,
      post: post
    });
  }

};

module.exports = PostActions;
