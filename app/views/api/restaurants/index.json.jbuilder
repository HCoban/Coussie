# json.partial! "api/restaurants/restaurant", collection: @restaurants, as: :restaurant


  @restaurants.each do |restaurant|
    json.set! restaurant.id, restaurant
  end
