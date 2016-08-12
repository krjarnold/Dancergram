const LikeApiUtil = {

  createLike (id, cb) {
    // debugger
    $.ajax({
      url: `api/posts/${id}/like`,
      type: "POST",
      dataType: "json",
      success (post) {
        cb(post);
      },
      error: (error) => {
        console.log(error);
      }
    });
  },


  deleteLike (id, cb) {
    $.ajax({
      url: `api/posts/${id}/like`,
      type: "DELETE",
      dataType: 'json',
      success (post) {
        cb(post);
      }
    });
  }

};

module.exports= LikeApiUtil;
