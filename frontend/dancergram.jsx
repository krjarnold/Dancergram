//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/app');
const LoginForm = require("./components/login_form");
const SignUpForm = require("./components/signup_form");
const PostFeed = require("./components/post_feed");
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ LoginForm } />
      <Route path="signup" component={ SignUpForm } />
      <Route path="posts" component={ PostFeed } onEnter={ _ensureLoggedIn }/>
    </Route>

  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/');
    }
}

document.addEventListener("DOMContentLoaded", () => {

  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById("content");
  ReactDOM.render(appRouter, root);
});
