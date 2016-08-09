const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
const PostFeedItem = require('../posts/post_feed_item');
const Link = require('react-router').Link;

const UserProfile = React.createClass({

  getInitialState() {
    const potentialUser = UserStore.find(this.props.params.userId);
    const user = potentialUser ? potentialUser : {};
    return ({ user: user, posts: [] });
  },

  componentDidMount() {
    this.token = UserStore.addListener(this.getUser);
    UserActions.getUser(Number(this.props.params.userId));
  },

  componentWillUnmount() {
    this.token.remove();
    // this.postToken.remove();
  },

  getUser() {
    this.userVerified = UserStore.find(this.props.params.userId);
    if (this.userVerified) {
      this.setState({
        username: this.userVerified.username,
        fullName: this.userVerified.full_name,
        // imageFile: this.userVerified.imageFile,
        // imageUrl: this.userVerified.imageUrl,
          posts: this.userVerified.posts
      });
      // this.postToken = PostStore.addListener(this.getPosts);
      // PostActions.fetchPosts();
      // // Update this to fetchPosts by user id
    }
  },

  // getPosts() {
  //   this.setState({
  //     username: this.userVerified.username,
  //     fullName: this.userVerified.full_name,
  //     // imageFile: this.userVerified.imageFile,
  //     // imageUrl: this.userVerified.imageUrl,
  //       posts: PostStore.all()
  //   });
  // },


  render () {
    if (!this.state.user) {
      return (<div>Loading!</div>);
    }

    let postsForProfile = this.state.posts.map( (post, i) =>  {
      return (<PostFeedItem key={i} post={post} />);
    });

    const singularPlural= this.state.posts.length === 1 ? " post" : " posts";
    return (
      <div className="user-profile">
        <p>{this.state.username}</p>
        <p>{this.state.fullName}</p>
        <p><strong>{this.state.posts.length}</strong>{singularPlural}</p>

        {postsForProfile}
        <Link to="/">Back to Feed</Link>
      </div>
    );
  }

});

module.exports = UserProfile;



// getInitialState() {
//   const potentialPost = PostStore.find(this.props.params.postId);
//   return { post: potentialPost ? potentialPost : {} };
// },
//
// componentDidMount() {
//   this.token = PostStore.addListener(this.getPost);
//   PostActions.getPost(Number(this.props.params.postId));
// },
//
// componentWillUnmount() {
//   this.token.remove();
// },
//
// getPost() {
//   let potentialPost = PostStore.find(this.post.params.postId);
//   this.setState({ post: potentialPost ? postentialPost : {} });
// },
//
// render () {
//   return (
//     <div className="post-container">
//       <p>{this.state.post.description}</p>
//       <Link to="/">Back to Feed</Link>
//     </div>
//   );
// }
// });
//
// module.exports = PostShow;
//
// const React = require('react');
// const PostStore = require('../../stores/post_store.js');
// const PostActions = require('../../actions/post_actions');
// const PostFeedItem = require('./post_feed_item');
// const PostForm = require('./post_form');
//
// const PostFeed= React.createClass({
//
//   getInitialState() {
//     return { posts: [] };
//   },
//
//   componentDidMount() {
//     this.token = PostStore.addListener(this.getPosts);
//     PostActions.fetchPosts();
//   },
//
//   componentWillUnmount() {
//     this.token.remove();
//   },
//
//   getPosts() {
//     this.setState({ posts: PostStore.all() });
//   },
//
//   render() {
//     let postsForFeed = this.state.posts.map( (post, i) =>  {
//       return (<PostFeedItem key={i} post={post} />);
//     });
//     return (
//       <div className="post-feed-container">Posts
//         <ul className="post-feed-list">
//           {postsForFeed}
//         </ul>
//         <PostForm />
//       </div>
//     );
//   }
// });
//
// module.exports = PostFeed;
