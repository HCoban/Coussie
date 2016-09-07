# json.set! restaurant.id do
  json.extract! restaurant, :id, :name, :city, :lat, :lng, :category_id,
    :owner_id, :website, :telephone, :price_range, :image_url, :reviews, :images
# end
