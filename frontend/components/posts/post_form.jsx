const React = require('react');
const PostActions = require('../../actions/post_actions');

const PostForm = React.createClass({
  getInitialState() {
    return ({ description: "" });
  },

  descriptionChange(e) {
    this.setState({ description: e.target.value });
  },

  handleSubmit(e) {
    e.preventDefault();
    const postData = {
      description: this.state.description
    };
    PostActions.createPost(postData);
    this.setState({ description: "" });
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
          <br></br>

          <input type="submit" value="Post to Dancergram!" />
        </form>
      </div>
    );
  }
});

module.exports = PostForm;
