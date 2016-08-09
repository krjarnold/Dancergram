# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.destroy_all
User.destroy_all

user1 = User.create!(full_name: "Ginger Rogers", username: "GingerRogers", password: "123456")

user2 = User.create!(full_name: "Fred Astaire", username: "FredAstaire", password: "asdfasdf")

user3 = User.create!(full_name: "Sarah Everson", username: "ILoveDance", password: "qwerty")


user2.posts.create!(description: "To my best dance partner, who does everything I do, but in heels!", image: File.open("app/assets/images/ginger.jpg"))
user1.posts.create!(description: "If you dance with your heart, your body will follow")
user3.posts.create!(description: "Never miss a change to dance!", image: File.open("app/assets/images/beachdancer.jpg"))
user3.posts.create!(description: "Why walk when you can dance", image: File.open("app/assets/images/hiphopred.jpg"))
user2.posts.create!(description: "Real Men Ballroom Dance!", image: File.open("app/assets/images/ballroom.jpg"))
