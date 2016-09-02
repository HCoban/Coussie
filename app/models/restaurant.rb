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
#

class Restaurant < ActiveRecord::Base
  validates :city, :lat, :lng, :category_id, :owner_id, presence: true
  validates :name, presence: true, uniqueness: true
  belongs_to :owner,
    class_name: :User

  def average_rating
    rand(5) + 1;
  end
end
