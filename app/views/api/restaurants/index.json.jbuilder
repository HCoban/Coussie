# json.partial! "api/restaurants/restaurant", collection: @restaurants, as: :restaurant


  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.average_rating restaurant.average_rating
      json.reviews do
        restaurant.reviews.each do |review|
          json.set! review.id do
            json.reviewer review.reviewer.username
            json.pic review.reviewer.picture_url
            json.extract! review, :vote, :description
          end
        end
      end
      json.images do
        restaurant.images.each do |image|
          json.set! image.id do
            json.image_url image.image_url
          end
        end
      end
      json.extract! restaurant, :id, :name, :city, :lat, :lng, :category_id,
        :owner_id, :website, :telephone, :price_range, :address, :image_url
    end
  end
