class Post < ActiveRecord::Base
  validates :description, :user_id, presence: true

  # has_attached_file :image, default_url: "dancer.jpg"
  has_attached_file :image, styles: {medium: "600x600#", thumb: "100x100>" }, default_url: "dancer.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user

  has_many :likes,
    class_name: "Like",
    foreign_key: :post_id,
    primary_key: :id

  has_many :likers,
    through: :likes,
    source: :user


end
