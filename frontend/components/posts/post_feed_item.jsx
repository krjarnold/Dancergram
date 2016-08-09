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
    const username = this.props.post.username;

    return(
      <li className="post-container">
        <header className="post-header">
          <Link to={`users/${this.props.post.userId}`} className="post-header-username">{username}</ Link>
          <p className="post-header-date">{this.props.post.createdAt}</p>
        </header>
        <div className="post-item-image-container">
          <img src={this.props.post.image_url} />
        </div>
        <div className="post-description-container">
          <strong>{username}</strong>
          <p>{this.props.post.description}</p>
        </div>
        <div className="post-links">
          <button onClick={this.editPost}>Edit</button>
          <button onClick={this.deletePost}>Delete</button>
        </div>
      </li>
    );
  }
});

module.exports = PostFeedItem;
