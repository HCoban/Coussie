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
    json.extract! restaurant, :id, :name, :city, :category_id, :price_range, :address, :image_url
  end
end
