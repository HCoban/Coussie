@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.average_rating restaurant.average_rating
    json.lastReview do
      review = restaurant.reviews.last
      json.id review.id
      json.picture review.reviewer.picture_url
      json.description review.description
    end
    json.category restaurant.category.title
    json.image_url restaurant.images&.first&.image_url
    json.extract! restaurant, :id, :name, :city, :category_id, :price_range, :address
  end
end
