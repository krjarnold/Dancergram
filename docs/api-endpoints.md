# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Posts

- `GET /api/posts`
  - Posts index/search
  - accepts `tag_name` query param to list posts by tag (bonus)
  - accepts pagination params (if I get there)
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments

- A post's comments will be included in the post show template
- `GET /api/comments`
- `POST /api/posts/:post_id/comments`: add comment to post
  - if post doesn't already exist, it will be created
- `DELETE /api/posts/:post_id/comments/:id`: remove comment from post by
  id

### Likes

- A post's likes will be included in the post show template
- `GET /api/likes`
- `POST /api/posts/:post_id/likes`: add a like to post
  - total likes counter will increment by 1
- `DELETE /api/posts/:post_id/likes/:id`: remove a like from post by
  id, likes counter will decrease by 1

### Follows

- A user's indication of following status will be included in the user show template
-`POST /api/follows` :follows a specific user
-`DELETE /api/follows/:id` :unfollows a specific user


### Tags (bonus)

- A post's tags will be included in the post show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/posts/:post_id/tags`: add tag to post by name
  - if post doesn't already exist, it will be created
- `DELETE /api/posts/:post_id/tags/:tag_name`: remove tag from post by
  name
