const React = require('react');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
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

  render () {
    return (
      <div className="post-container">
        <p>{this.state.post.description}</p>
        <Link to="/">Back to Feed</Link>
      </div>
    );
  }
});

module.exports = PostShow;
