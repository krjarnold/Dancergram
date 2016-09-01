const React = require('react');
const Link = require('react-router').Link;
const PostActions = require('../../actions/post_actions');
const LikeApiUtil = require('../../util/like_api_util');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');

const PostFeedItem = React.createClass({

  getInitialState() {
    return { likes: this.props.post.likes,
      likesCount: this.props.post.likesCount };
  },

  // componentWillReceiveProps(props) {
  //   debugger
  //   this.setState( { likes: props.post.likes, likesCount: props.post.likesCount });
  //   // PostActions.getPost(Number(props.post.id));
  // },

  changeLike(e) {
    e.preventDefault();
    const id = Number(this.props.post.id);
    if (this.props.post.likes) {
      LikeApiUtil.deleteLike(id, PostActions.receivePost);
    } else {
      LikeApiUtil.createLike(id, PostActions.receivePost);
    }
  },

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
    const currentUser = SessionStore.currentUser();
    let postOptions;
      if (this.props.post.userId === currentUser.id) {
        postOptions = (
          <div className="post-links">
            <button onClick={this.editPost}>Edit</button>
            <button onClick={this.deletePost}>Delete</button>
          </div>);
      } else {
          postOptions = (<div className="post-links"></div>);
      }


      let heart;
        if (this.props.post.likes) {
          heart = <img className="liked" src={DancergramAssets.full_heart} />;
        } else if ((this.props.post.userId === currentUser.id) && (this.props.post.likesCount > 0)) {
          heart = <img className="liked" src={DancergramAssets.full_heart} />;
        } else {
          heart = <img className="not-liked" src={DancergramAssets.outline_heart} />;
        }


      const singularPlural= this.props.post.likesCount === 1 ? " like" : " likes";


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
          <br />
        </div>
        <div className="post-likes-container">
          <button onClick={this.changeLike} className="post-likes-button">
            {heart}
          </button>
          <p>{this.props.post.likesCount}{singularPlural}</p>
        </div>
        {postOptions}
      </li>
    );
  }
});

module.exports = PostFeedItem;
