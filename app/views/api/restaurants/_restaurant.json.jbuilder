# json.set! restaurant.id do
  json.extract! restaurant, :name, :city, :lat, :lng, :category_id,
    :owner_id, :website, :telephone, :price_range
# end
