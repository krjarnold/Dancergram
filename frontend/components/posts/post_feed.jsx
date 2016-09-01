const React = require('react');
const PostStore = require('../../stores/post_store.js');
const PostActions = require('../../actions/post_actions');
const PostFeedItem = require('./post_feed_item');
const PostForm = require('./post_form');
const Link = require('react-router').Link;
const PostFeed= React.createClass({

  getInitialState() {
    return { posts: [] };
  },

  componentDidMount() {
    this.token = PostStore.addListener(this.getPosts);
    PostActions.fetchPosts();
  },

  componentWillUnmount() {
    this.token.remove();
  },

  getPosts() {
    this.setState({ posts: PostStore.all() });
  },

  render() {
    let postsForFeed = this.state.posts.map( (post, i) =>  {
      return (<PostFeedItem key={i} post={post} />);
    });
    return (
      <div className="post-feed-container">
        <ul className="post-feed-list">
          {postsForFeed}
        </ul>
        <Link className="add-post-form" to="posts/create">
          <img className="add-post-form-image" src={DancergramAssets.plus} alt="Add a post!"></img>
        </Link>
      </div>
    );
  }
});

module.exports = PostFeed;
