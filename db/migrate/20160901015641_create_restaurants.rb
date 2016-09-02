class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :category_id, null: false
      t.integer :owner_id, null: false
      t.string :website
      t.string :telephone
      t.integer :price_range

      t.timestamps null: false
    end

    add_index :restaurants, :name, unique: true
    add_index :restaurants, [:city, :lat, :lng, :category_id]
  end
end
