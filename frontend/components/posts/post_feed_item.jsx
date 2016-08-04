const React = require('react');
const Link = require('react-router').Link;
const PostActions = require('../../actions/post_actions');
const hashHistory = require('react-router').hashHistory;
const PostFeedItem = React.createClass({

  // ##Remember to add in edit/delete logic later
  editPost(e) {
    e.preventDefault();
    const url = `/posts/${this.props.post.id}/edit`;
    hashHistory.push(url);
  },

  deletePost(e) {
    e.preventDefault();
    PostActions.deletePost(this.props.post.id);
  },

  render() {
    return(
      <li className="post-container">
        <header>
          <h2>Username logic</h2>
        </header>
        <div className="post-item-image-container">

        </div>
        <div className="post-description-container">
          <p>{this.props.post.description}</p>
        </div>
        <button onClick={this.editPost}>Edit</button>
        <button onClick={this.deletePost}>Delete</button>
      </li>
    );
  }
});

module.exports = PostFeedItem;
