# == Schema Information
#
# Table name: images
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  image_url     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Image < ActiveRecord::Base
  validates :image_url, :restaurant_id, presence: true

  belongs_to :restaurant
end
