# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :username, :full_name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  attr_reader :password

  has_many :posts

  has_many :follows,
    class_name: "Follow",
    foreign_key: :user_id,
    primary_key: :id

  has_many :follows_this_user,
    class_name: "Follow",
    foreign_key: :followed_user_id,
    primary_key: :id

  has_many :followed_users,
    through: :follows,
    source: :followed_user

  has_many :followed_posts,
    through: :follows,
    source: :followed_posts

  has_many :followers,
    through: :follows_this_user,
    source: :following_user


  after_initialize :ensure_session_token


  def total_posts
    total_posts = [self.id] + [self.followed_user_ids]
    Post.where(user_id: total_posts).order(created_at: :desc)
  end



  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.valid_password?(password)
      return user
    end
    return nil
  end

  def self.generate_session_token
    token = SecureRandom::urlsafe_base64(16)

    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end
    token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def follows?(user)
    followed_users.include?(user)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
