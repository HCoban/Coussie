class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email
      t.string :city
      t.text :motto
      t.string :picture_url
      t.timestamps null: false
    end

    add_index :users, [:username, :password_digest, :session_token],
      unique: true
  end
end
