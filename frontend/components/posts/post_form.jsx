const React = require('react');
const PostActions = require('../../actions/post_actions');

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
  },

  render() {
    return(
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
          <input type="submit" value="Post to Dancergram!" />
        </form>
      </div>
    );
  }
});

module.exports = PostForm;
