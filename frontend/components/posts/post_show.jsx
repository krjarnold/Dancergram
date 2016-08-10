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
    this.setState({ post: potentialPost ? postentialPost : {} });
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
    if (!post) {
      return <div>Loading!</div>;
    } else {
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
            <div className="post-show-links">
              <button onClick={this.editPost}>Edit</button>
              <button onClick={this.deletePost}>Delete</button>
            </div>
          </div>
        </div>
        <div className="post-show-profile-link">
          <Link to={`users/${this.state.post.userId}`}>
            <img className="post-show-profile-link-image" src={DancergramAssets.ximg} />
          </Link>
        </div>
      </div>
      );
    }
  }
});

module.exports = PostShow;
