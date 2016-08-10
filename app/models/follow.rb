class Follow < ActiveRecord::Base
  validates :user_id, :followed_user_id, presence: true

  belongs_to :following_user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :followed_user,
    class_name: "User",
    foreign_key: :followed_user_id,
    primary_key: :id

  has_many :followed_posts,
    through: :followed_user,
    source: :posts

end
