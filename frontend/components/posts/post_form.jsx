const React = require('react');
const PostActions = require('../../actions/post_actions');
const hashHistory = require('react-router').hashHistory;


const PostForm = React.createClass({
  getInitialState() {
    return ({
      description: "",
      imageFile: "",
      imageUrl: ""
    });
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

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[description]", this.state.description);
    formData.append("post[image]", this.state.imageFile);
    PostActions.createPost(formData);
    this.setState({ description: "", imageFile: "", imageUrl: "" });
    hashHistory.push("/");
  },

  render() {
    return(
        <form className="post-form" onSubmit={this.handleSubmit}>
          <h1 className= "post-form-header">Add a post</h1>
          <label>Description
            <input
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.descriptionChange} />
          </label>
          <br />
          <label>Add picture
            <input
              type="file"
              onChange={this.fileChange} />
          </label>
          <br />
          <img className="post-preview" src={this.state.imageUrl} />
          <br />
          <input className="post-form-submit" type="submit" value="Post to Dancergram!" />
        </form>
    );
  }
});

module.exports = PostForm;
