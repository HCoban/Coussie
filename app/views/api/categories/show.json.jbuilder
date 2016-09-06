#json.partial! "api/categories/category", category: @category
@category.restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! "api/restaurants/restaurant", restaurant: restaurant
  end
end
