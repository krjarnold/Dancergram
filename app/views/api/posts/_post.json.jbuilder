json.extract! post, :id, :description
json.username post.user.username
json.userId post.user.id
json.image_url asset_path(post.image.url(:medium) )
json.createdAt distance_of_time_in_words(post.created_at, Time.now)

json.likesCount post.likes.count
json.likes current_user.likes?(post)
