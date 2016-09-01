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
      imageFile: null,
      imageUrl: post.image_url
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
    // debugger
    this.setState({ description: e.target.value });
  },

  fileChange(e) {
    // changed this to target
    let file = e.target.files[0];
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
    this.setState({
      description: post.description,
      // imageFile: post.imageFile,
      imageUrl: post.image_url
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[description]", this.state.description);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    PostActions.editPost(formData, Number(this.props.params.postId));
    hashHistory.push("/");
  },

  render() {
    if (!this.state.description) {
      return (<div>Loading!</div>);
    } else {
        return (
          <div className="post-form-edit-container">
            <form className="post-form" onSubmit={this.handleSubmit}>
              <h1 className= "post-form-header">Edit your post</h1>
              <label>Edit description
                <input
                  type="text"
                  value={this.state.description}
                  onChange={this.descriptionChange} />
              </label>
              <br />
              <label>Change picture
                <input
                  type="file"
                  onChange={this.fileChange} />
              </label>
              <br />
              <img className="post-preview" src={this.state.imageUrl} />
              <br />
              <input className="post-form-submit" type="submit" value="Save Changes" />
            </form>
          </div>
        );
      }
    }
});

module.exports = PostEdit;
