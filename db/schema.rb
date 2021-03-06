# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160907182939) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "title"
    t.string   "image_url"
  end

  add_index "categories", ["title"], name: "index_categories_on_title", using: :btree

  create_table "images", force: :cascade do |t|
    t.integer  "restaurant_id", null: false
    t.string   "image_url",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "images", ["restaurant_id"], name: "index_images_on_restaurant_id", using: :btree

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "city",        null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.integer  "category_id", null: false
    t.integer  "owner_id",    null: false
    t.string   "website"
    t.string   "telephone"
    t.integer  "price_range"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "address"
    t.string   "image_url"
  end

  add_index "restaurants", ["city", "lat", "lng", "category_id"], name: "index_restaurants_on_city_and_lat_and_lng_and_category_id", using: :btree
  add_index "restaurants", ["name"], name: "index_restaurants_on_name", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "reviewer_id",   null: false
    t.integer  "restaurant_id", null: false
    t.integer  "vote",          null: false
    t.text     "description"
    t.string   "picture_url"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "reviews", ["reviewer_id", "restaurant_id"], name: "index_reviews_on_reviewer_id_and_restaurant_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email"
    t.string   "city"
    t.text     "motto"
    t.string   "picture_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username", "password_digest", "session_token"], name: "index_users_on_username_and_password_digest_and_session_token", unique: true, using: :btree

end
