# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  reviewer_id   :integer          not null
#  restaurant_id :integer          not null
#  vote          :integer          not null
#  description   :text
#  picture_url   :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ActiveRecord::Base
  validates :reviewer_id, :restaurant_id, :vote, presence: true
  validates :vote, inclusion: {in: (1..5)}

  belongs_to :reviewer,
    class_name: :User

  belongs_to :restaurant
end
