const SessionApiUtil = {
  logIn(user, success, errorCb) {
    $.ajax({
      url: '/api/session',
      type: "POST",
      data: { user },
      success,
      error(resp) {
        const errors = resp.responseJSON;
        errorCb("login", errors);
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: '/api/session',
      method: "DELETE",
      success,
      error() {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  },

  signUp(user, success, error) {
    $.ajax({
      url: '/api/users',
      type: "POST",
      dataType: 'json',
      data: { user },
      success,
      error(resp) {
        const errors = resp.responseJSON;
        error("signup", errors);
      }
    });
  },

  fetchCurrentUser(success, complete) {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      success,
      error(resp) {
        console.log("Error in SessionApiUtil#fetchCurrentUser");
      },
      complete
    });
  }

};

module.exports = SessionApiUtil;
