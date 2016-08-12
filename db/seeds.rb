# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.destroy_all
User.destroy_all
Follow.destroy_all
Like.destroy_all

user1 = User.create!(full_name: "Ginger Rogers", username: "ginger_r", password: "123456")

user2 = User.create!(full_name: "Fred Astaire", username: "FredAstaire", password: "asdfasdf")

user3 = User.create!(full_name: "Sarah Everson", username: "ILoveDance", password: "qwerty")

user4 = User.create!(full_name: "Amy Harris", username: "misty_fan!", password: "asdf123")


post1 = user2.posts.create!(description: "To my best dance partner, who does everything I do, but in heels!", image: File.open("app/assets/images/ginger.jpg"))

post2 = user1.posts.create!(description: "If you dance with your heart, your body will follow")

post3 = user3.posts.create!(description: "Never miss a change to dance!", image: File.open("app/assets/images/beachdancer.jpg"))

post4 = user4.posts.create!(description: "Misty Copeland always looks amazing!", image: File.open("app/assets/images/misty_copeland.jpg"))

post5 = user2.posts.create!(description: "Real Men Ballroom Dance!", image: File.open("app/assets/images/ballroom.jpg"))

post6 = user3.posts.create!(description: "Why walk when you can dance", image: File.open("app/assets/images/hiphopred.jpg"))



like1 = user3.likes.create!(post_id: post4.id)

like2 = user3.likes.create!(post_id: post5.id)

like3 = user4.likes.create!(post_id: post4.id)

like4 = user1.likes.create!(post_id: post4.id)

like5 = user2.likes.create!(post_id: post3.id)


follow1 = user3.follows.create!(followed_user_id: user4.id)

follow2 = user3.follows.create!(followed_user_id: user2.id)
