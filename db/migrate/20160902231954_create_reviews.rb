class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :vote, null: false
      t.text :description
      t.string :picture_url

      t.timestamps null: false
    end
  end
end
