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

  createPost (formData, cb) {
    $.ajax({
      url: "api/posts",
      type: "POST",
      dataType: "json",
      contentType: false,
      processData: false,
      data: formData,
      success (post) {
        cb(post);
      }
    });
  },

  updatePost (formData, id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      type: "PATCH",
      contentType: false,
      processData: false,
      data: formData,
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
