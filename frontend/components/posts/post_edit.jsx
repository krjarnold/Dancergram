const React = require('react');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const PostEdit = React.createClass({
  getInitialState() {
    const potentialPost = PostStore.find(this.props.params.postId);
    const post = potentialPost ? potentialPost : {};
    return ({ description: post.description });
  },

  componentDidMount() {
    this.token = PostStore.addListener(this.handleChange);
    PostActions.getPost(Number(this.props.params.postId));
  },

  componentWillUnmount() {
    this.token.remove();
  },

  descriptionChange(e) {
    this.setState({ description: e.target.value });
  },

  handleChange() {
    const potentialPost = PostStore.find(this.props.params.postId);
    const post = potentialPost ? potentialPost : {};
    this.setState({ description: post.description });
  },

  handleSubmit(e) {
    e.preventDefault();
    const postData = {
      description: this.state.description,
      id: Number(this.props.params.postId)
    };
    PostActions.editPost(postData);
    hashHistory.push("/");
  },

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.descriptionChange} />
          <br/>

          <input type="submit" value="Save Changes" />
        </form>
      </div>
    );
  }

});

module.exports = PostEdit;
