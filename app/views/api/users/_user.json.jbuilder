json.extract! user, :id, :username, :full_name
# json.posts = user.posts

# How does this work!!!!!!!!!!!
json.posts user.posts do |post|
  json.partial! "api/posts/post.json.jbuilder", post: post
end
