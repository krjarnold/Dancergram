class Post < ActiveRecord::Base
  validates :description, :user_id, presence: true

  has_attached_file :image, default_url: "dancer.jpg"
  has_attached_file :image, styles: {medium: "600x600>", thumb: "100x100>" }, default_url: "dancer.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
end
