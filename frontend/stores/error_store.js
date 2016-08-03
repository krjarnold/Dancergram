const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = "";

const _setErrors = function(payload) {
  _errors = payload.errors;
  _form = payload.form;
};

const _clearErrors = function() {
  _errors = [];
  _form = "";
};

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

ErrorStore.errors = function (form) {
  if (form !== _form) {
    return [];
  }
  return _errors.slice();
};

ErrorStore.form = function () {
  return _form;
};

module.exports = ErrorStore;
