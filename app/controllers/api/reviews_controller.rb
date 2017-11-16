class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id

    if @review.save
      render "api/reviews/show"
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
      end
    end
  end

  def index
    restaurant = Restaurant.find_by(id: review_params[:restaurant_id])
    @page = review_params[:page]
    if restaurant && @page
      @reviews = restaurant.reviews.order("created_at DESC")[5*@page.to_i, 5]
      render "api/reviews/index"
    else
      render json: "not found"
    end

  end

  private

  def review_params
    params.require(:review).permit(:id, :vote, :description, :restaurant_id, :page)
  end
end
