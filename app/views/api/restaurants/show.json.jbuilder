json.set! @restaurant.id do
  json.reviews do
    @reviews.each do |review|
      json.set! review.id do
        json.reviewer review.reviewer.username
        json.pic review.reviewer.picture_url
        json.time_distance (distance_of_time_in_words(Time.now - review.created_at) + " ago")
        json.extract! review, :vote, :description, :id
      end
    end
  end
end
