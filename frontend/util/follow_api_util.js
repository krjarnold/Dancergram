const FollowApiUtil = {

  createFollow (id, cb) {
    $.ajax({
      url: `api/users/${id}/follow`,
      type: "POST",
      dataType: "json",
      success (user) {
        cb(user);
      }
    });
  },


  deleteFollow (id, cb) {
    $.ajax({
      url: `api/users/${id}/follow`,
      type: "DELETE",
      dataType: 'json',
      success (user) {
        cb(user);
      }
    });
  }

};

module.exports= FollowApiUtil;
