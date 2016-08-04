# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.destroy_all
User.destroy_all

user1 = User.create!(full_name: "Ginger Rodgers", username: "GingerRogers", password: "123456")

user1.posts.create!(description: "If you dance with your heart, your body will follow")
