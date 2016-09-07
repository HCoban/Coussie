class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :restaurant_id, null: false
      t.string :image_url, null: false
      t.timestamps null: false
    end

    add_index :images, :restaurant_id
  end
end
