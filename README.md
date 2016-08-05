# Dancergram

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://dancergram.herokuapp.com

## Minimum Viable Product

Dancergram is a web application inspired by Instagram that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Posts
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Following
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Likes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Infinite Scroll for Posts

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication backend setup
- [ ] create `StaticPages` controller and root view
- [ ] set up webpack & flux scaffold with skeleton files
- [ ] setup `APIUtil` to interact with the API
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] blank landing component after signin
- [ ] style signin/signup components
- [ ] seed users

### Phase 2: Post Model, API, and components (2 days, W1 F 6pm)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [ ] create `Post` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for posts (`PostsController`)
- [ ] jBuilder views for posts
- [ ] test out API interaction in the console.
- implement each post component, building out the flux loop as needed.
  - [ ] `PostsIndex`
  - [ ] `PostIndexItem`
  - [ ] `PostForm`
- [ ] save Posts to the DB when the form is submitted.
- [ ] style posts components
- [ ] seed posts

### Phase 3: Posts (1 day, W2 M 6pm)

**Objective:** Posts belong to a user, and can be viewed by the user-profile.

- build out API, Flux loop, and components for:
  - [ ] User-profile/Posts CRUD
  - [ ] adding posts requires a user
  - [ ] editing posts requires correct user_id
  - [ ] viewing posts by specific user
- [ ] Use CSS to style new components

Phase 3 adds organization to the Posts. Posts belong to a User,
which has its own `Index` view.

### Phase 4: Follows (1 days, W2 T 6pm)

**Objective:** Users can have with multiple followers, and follow multiple users.

- [ ] create `Follows` model
- build out API, Flux loop, and components for:
  - [ ] adding following ability to a user
  - [ ] adding followers for a user
- [ ] Style new elements
- [ ] Seed followers

### Phase 5: Comments (1 days, W2 W 6pm)

**Objective:** Posts can have with multiple comments.

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] adding comments to a post
- [ ] Style new elements
- [ ] Seed comments

### Phase 6: Likes (1 days, W2 Th 6pm)

**Objective:** Posts can have multiple likes.

- [ ] create `Like` model
- build out API, Flux loop, and components for:
  - [ ] adding likes to a post
- [ ] Style new elements
- [ ] Seed likes


### Phase 7: - Pagination / infinite scroll for Posts Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Posts Index

- [ ] Paginate Posts Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Make sure styling still looks good
- [ ] Ensure we have enough seeded posts to demo infinite scroll


### Bonus Features (TBD)

**Objective:** Posts can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for posts
  - [ ] adding tags to posts
  - [ ] creating tags while adding posts
  - [ ] searching posts by tag
- [ ] Style new elements
- [ ] Seed tags and tag the seeded posts


[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
