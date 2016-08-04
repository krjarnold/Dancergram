const React = require('react');
const PostStore = require('../../stores/post_store.js');
const PostActions = require('../../actions/post_actions');
const PostFeedItem = require('./post_feed_item');
const PostForm = require('./post_form');

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
      <div className="post-feed-container">Posts
        <ul className="post-feed-list">
          {postsForFeed}
        </ul>
        <PostForm />
      </div>
    );
  }
});

module.exports = PostFeed;
