const React = require('react');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

const PostShow = React.createClass({

  getInitialState() {
    const potentialPost = PostStore.find(this.props.params.postId);
    return { post: potentialPost ? potentialPost : {} };
  },

  componentDidMount() {
    this.token = PostStore.addListener(this.getPost);
    PostActions.getPost(Number(this.props.params.postId));
  },

  componentWillUnmount() {
    this.token.remove();
  },

  getPost() {
    let potentialPost = PostStore.find(this.props.params.postId);
    this.setState({ post: potentialPost ? potentialPost : {} });
  },

  editPost(e) {
    e.preventDefault();
    const url = `/posts/${this.state.post.id}/edit`;
    hashHistory.push(url);
  },

  deletePost(e) {
    e.preventDefault();
    PostActions.deletePost(this.state.post.id);
  },

  render () {
    if (!this.state.post) {
      return <div>Loading!</div>;
    } else {
      const username = this.state.post.username;

      let postOptions;
        if (this.state.post.userId === window.currentUser.id) {
          postOptions = (
            <div className="post-show-links">
              <button onClick={this.editPost}>Edit</button>
              <button onClick={this.deletePost}>Delete</button>
            </div>);
        } else {
            postOptions = (<div className="post-show-links"></div>);
        }
      return (
      <div className="post-show-page">
        <div className="post-show-container">
          <div className="post-show-image-container">
            <img src={this.state.post.image_url} />
          </div>
          <div className="post-show-sidebar">
            <header className="post-show-header">
              <Link to={`users/${this.state.post.userId}`} className="post-header-username">{username}</ Link>
              <p className="post-header-date">{this.state.post.createdAt}</p>
            </header>
            <div className="post-show-description-container">
              <strong>{username}</strong>
              <p>{this.state.post.description}</p>
            </div>
            {postOptions}
          </div>
        </div>
      </div>
      );
    }
  }
});

module.exports = PostShow;
