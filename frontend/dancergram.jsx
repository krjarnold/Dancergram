//React
const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');
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
const PostFeed = require("./components/posts/post_feed");
const PostFeedItem = require("./components/posts/post_feed_item");
const PostEdit = require("./components/posts/post_edit");
const PostForm = require("./components/posts/post_form");
const PostShow = require("./components/posts/post_show");
const UserProfile =require("./components/users/user_profile");
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={ App } onEnter={ _ensureLoggedIn }>
      <IndexRoute component={ PostFeed } />
      <Route path="posts" component={ PostFeed } />
      <Route path="posts/create" component={ PostForm } />
      <Route path="posts/:postId/edit" component={ PostEdit } />
      <Route path="posts/:postId" component={ PostShow } />
      <Route path="users/:userId" component={ UserProfile } />
    </Route>

    <Route path="/login" component={ LoginForm } />
    <Route path="/signup" component={ SignUpForm } />

  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener("DOMContentLoaded", () => {

  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  Modal.setAppElement(document.body);

  const root = document.getElementById("content");
  ReactDOM.render(appRouter, root);
});
