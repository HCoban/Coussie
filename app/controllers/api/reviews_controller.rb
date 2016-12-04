class Api::ReviewsController < ApplicationController
  def create
    review = Review.new(review_params)
    review.reviewer_id = current_user.id

    if review.save
      @restaurant = review.restaurant
      @reviews = @restaurant.reviews
      render "api/restaurants/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    if review && review.reviewer_id == current_user.id
      @restaurant_id = review.restaurant_id
      @review_id = review.id
      if review.destroy
        render "api/reviews/show"
      else
      end
    end
  end

  private

  def review_params
    params.require(:review).permit(:id, :vote, :description, :restaurant_id)
  end
end
