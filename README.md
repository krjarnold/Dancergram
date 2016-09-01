# Dancergram

###[Heroku link](http://dancergram.herokuapp.com)

*Dancergram is a web application inspired by Instagram that built using Ruby on Rails and React.js.*

![Dancergram](/app/assets/images/pict_dancergram.png)


Dancergram features:
#######Posts
  * Users can upload pictures
    * File uploads utilize Amazon Web Services and Paperclip
  * Users can edit and delete their own posts
  * Users can view the posts from all other "followed" users
  * Post's are ordered by when they were created

######Follows
  * A user can "follow" another user
    * All posts from followed users are displaced chronologically on the post-feed
  * A user can "unfollow" a followed user

######Likes
  * A user can "like" a followed user's post
  * A user can "unlike" a followed user's post
  * The total number of "likes" per post is displayed

######User Profile
  * Displays all the posts a user has created
  * Allows the user to click and see a single, large version of the post
  * When one post is selected, the user can edit the post

######Search for Users
  * Search for users to follow

######Authentication
  * Users must be logged in order to add, edit, or delete posts
