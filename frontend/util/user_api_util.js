const UserApiUtil = {
  fetchUsers (cb) {
    $.ajax({
      url: "api/users",
      success (users) {
        cb(users);
      }
    });
  },

  getUser (id, cb) {
    $.ajax({
      url: `api/users/${id}`,
      success (users) {
        cb(users);
      }
    });
  },

// Haven't written this method yet (Later on for editing user profile)
  // updateUser (formData, id, cb) {
  //   $.ajax({
  //     url: `api/users/${id}`,
  //     type: "PATCH",
  //     contentType: false,
  //     processData: false,
  //     data: formData,
  //     success (post) {
  //       cb(post);
  //     }
  //   });
  // },

// Probably won't implement a delete account feature at the moment

//   deleteUser (id, cb) {
//     $.ajax({
//       url: `api/users/${id}`,
//       type: "DELETE",
//       dataType: 'json',
//       success (users) {
//         cb(users);
//       },
//       complete() {
//       }
//     });
//   }
//
};

module.exports = UserApiUtil;
