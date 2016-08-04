json.extract! post, :id, :description
json.username post.user.username
json.image_url asset_path(post.image.url)
