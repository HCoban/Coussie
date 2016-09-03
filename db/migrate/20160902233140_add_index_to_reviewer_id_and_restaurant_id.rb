class AddIndexToReviewerIdAndRestaurantId < ActiveRecord::Migration
  def change
    add_index :reviews, [:reviewer_id, :restaurant_id]
  end
end
