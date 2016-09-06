# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#

class Category < ActiveRecord::Base
  validates :title, presence: true

  has_many :restaurants
end
