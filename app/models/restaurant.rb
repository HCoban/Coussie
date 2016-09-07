# == Schema Information
#
# Table name: restaurants
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  city        :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  category_id :integer          not null
#  owner_id    :integer          not null
#  website     :string
#  telephone   :string
#  price_range :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  address     :string
#  image_url   :string
#

class Restaurant < ActiveRecord::Base
  validates :city, :lat, :lng, :category_id, :owner_id, presence: true
  validates :name, presence: true, uniqueness: true

  after_initialize :ensure_image_url

  belongs_to :owner,
    class_name: :User

  has_many :reviews,
    class_name: :Review

  belongs_to :category

  has_many :images

  def ensure_image_url
    self.image_url ||= "http://images.clipartpanda.com/restaurant-clipart-restaurant-building-clipart-great.jpg"
  end

  def average_rating
    rand(5) + 1;
  end
end
