class AddIndexToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :title, :string
    add_index :categories, :title
  end
end
