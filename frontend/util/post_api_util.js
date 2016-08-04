const PostApiUtil = {
  fetchPosts (cb) {
    $.ajax({
      url: "api/posts",
      success (posts) {
        cb(posts);
      }
    });
  },

  getPost (id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      success (posts) {
        cb(posts);
      }
    });
  },

  createPost (data, cb) {
    $.ajax({
      url: "api/posts",
      type: "POST",
      data: {post: data},
      success (post) {
        cb(post);
      }
    });
  },

  updatePost (data, cb) {
    $.ajax({
      url: `api/posts/${data.id}`,
      type: "PATCH",
      data: {post:
        {
          description: data.description,
          user_id: data.user_id
        }},
      success (post) {
        cb(post);
      }
    });
  },

  deletePost (id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      type: "DELETE",
      success (posts) {
        cb(posts);
      }
    });
  }

};

module.exports= PostApiUtil;
