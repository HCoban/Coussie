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

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review && @review.reviewer_id == current_user.id
      if @review.destroy
        @restaurants = Restaurant.all
        render "api/restaurants/index"
      else
      end
    end
  end

  private

  def review_params
    params.require(:review).permit(:id, :vote, :description, :restaurant_id)
  end
end
