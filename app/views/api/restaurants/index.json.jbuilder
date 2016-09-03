# json.partial! "api/restaurants/restaurant", collection: @restaurants, as: :restaurant


  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.average_rating restaurant.average_rating
      json.review do
        json.info restaurant.reviews.first
        json.reviewer @restaurants.first.reviews.first.reviewer
      end
      json.extract! restaurant, :id, :name, :city, :lat, :lng, :category_id,
        :owner_id, :website, :telephone, :price_range, :address, :image_url
    end
  end
