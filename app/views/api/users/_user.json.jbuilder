json.extract! user, :id, :username, :full_name
# json.posts = user.posts

json.posts user.posts do |post|
  json.partial! "api/posts/post.json.jbuilder", post: post
end

if user
  json.following current_user.follows?(user)
end
