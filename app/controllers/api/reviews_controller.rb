class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id

    if @review.save
      @restaurants = Restaurant.all
      render "api/restaurants/index"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:vote, :description, :restaurant_id)
  end
end
