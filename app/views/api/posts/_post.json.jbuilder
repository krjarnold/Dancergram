json.extract! post, :id, :description
json.username post.user.username
json.userId post.user.id
json.image_url asset_path(post.image.url)
json.createdAt distance_of_time_in_words(post.created_at, Time.now)
