const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
const PostShow = require('../posts/post_show');
const Link = require('react-router').Link;
const Modal = require('react-modal');
const ModalStyle = require('../../constants/modal_style');


const UserProfile = React.createClass({

  getInitialState() {
    const potentialUser = UserStore.find(this.props.params.userId);
    const user = potentialUser ? potentialUser : {};
    return ({
      user: user,
      posts: [],
      modalOpen: false,
      currentPost: []
    });
    },

  componentDidMount() {
    this.token = UserStore.addListener(this.getUser);
    UserActions.getUser(Number(this.props.params.userId));
  },

  componentWillUnmount() {
    this.token.remove();
  },


  getUser() {
    this.userVerified = UserStore.find(this.props.params.userId);
    if (this.userVerified) {
      this.setState({
        username: this.userVerified.username,
        fullName: this.userVerified.full_name,
        posts: this.userVerified.posts
      });
    }
  },

  onModalClose() {
    this.setState({ modalOpen: false });
  },

  __handleClick(post) {
    let params = {postId: post.id};
    this.setState({ modalOpen: true, currentPost: <PostShow params={params} /> });
  },


  render () {
    if (!this.state.user) {
      return (<div>Loading!</div>);
    }
    let postsForProfile = this.state.posts.map( (post, i) =>  {
      return (
        <button onClick={() => this.__handleClick(post) } key={i}>
          <img src={post.image_url} />
        </button>
      );
    });


    let closeImage;
      if (this.state.modalOpen) {
       closeImage = (<img onClick={this.onModalClose} className="close-img" src={DancergramAssets.ximg} />);
      } else {
        closeImage = <div className="close-img" />;
      }
    const singularPlural= this.state.posts.length === 1 ? " post" : " posts";
    return (
      <div className="user-profile-wrapper">
          {closeImage}
              <Modal
                isOpen={this.state.modalOpen}
                onRequestClose={this.onModalClose}
                style={ModalStyle}>

                {this.state.currentPost}
                </Modal>


                <div className="user-profile">

                      <header className="user-profile-header">
                        <h1>{this.state.username}</h1>
                        <h2>{this.state.fullName}</h2>
                        <h3><strong>{this.state.posts.length}</strong>{singularPlural}</h3>
                      </header>

                      <ul className="user-profile-posts">
                        {postsForProfile}
                      </ul>
                </div>
    </div>
    );
  }

});

module.exports = UserProfile;
