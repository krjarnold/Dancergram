const React = require('react');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const PostEdit = React.createClass({
  getInitialState() {
    const potentialPost = PostStore.find(this.props.params.postId);
    const post = potentialPost ? potentialPost : {};
    return ({
      description: post.description,
      imageFile: post.imageFile,
      imageUrl: post.imageUrl
    });
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

  fileChange(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  handleChange() {
    const potentialPost = PostStore.find(this.props.params.postId);
    const post = potentialPost ? potentialPost : {};
    this.setState({ description: post.description });
  },

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[description]", this.state.description);
    formData.append("post[image]", this.state.imageFile);
    PostActions.editPost(formData, Number(this.props.params.postId));
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
          <br />
            <input
              type="file"
              onChange={this.fileChange} />
            <img src={this.state.imageUrl} />
          <br />
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    );
  }

});

module.exports = PostEdit;
