## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **LoginForm**
  * **SignupForm**
  * **PostsIndex**
    * Navbar
      * IndexPageLink
      * SearchBar
      * UserInteractions
        * ExploreUsers
        * FollowingDropDown
        * UserProfileLink
    * PostFeed
      * PostFeedItem
      * HeaderBar
        * UserInfo
        * DateStamp
      * Image
      * LikesCounter
      * CommentDisplay
      * InteractiveBar
        * LikesButton
        * AddCommentForm
  * **UserProfile**
    * ProfileHeader
      * Picture
      * Information
      * FollowingStatus
    * UserPosts
      * Posts
    * UploadPostForm (for current user profile only?)
