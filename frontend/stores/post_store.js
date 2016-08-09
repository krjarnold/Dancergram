const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PostConstants = require('../constants/post_constants');

const PostStore = new Store(AppDispatcher);

let _posts = {};

PostStore.all = function () {
  return Object.keys(_posts).reverse().map( (key) => {
    return _posts[key];
  });
};

PostStore.find = function (id) {
  return _posts[id];
};

PostStore.addPost = function (post) {
  _posts[post.id] = post;
};

PostStore.removePost = function (post) {
  delete _posts[post.id];
};

PostStore.addManyPosts = function (posts) {
  _posts = {};

  posts.forEach( (post) => {
    _posts[post.id] = post;
  });
};

PostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PostConstants.RECEIVED_POSTS:
      PostStore.addManyPosts(payload.posts);
      PostStore.__emitChange();
      break;
    case PostConstants.RECEIVED_POST:
      PostStore.addPost(payload.post);
      PostStore.__emitChange();
      break;
    case PostConstants.REMOVED_POST:
      PostStore.removePost(payload.post);
      PostStore.__emitChange();
      break;
  }
};

module.exports = PostStore;
