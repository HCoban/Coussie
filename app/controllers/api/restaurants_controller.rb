
class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.owner_id = current_user.id
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def show
    @restaurant = Restaurant.find_by(params.id)
    render :show
  end

  def update
    @restaurant = Restaurant.find_by(params)
    if @restaurant && @restaurant.update_attributes(restaurant_params)
      render :show
    else
      render json: ["error"], status: 422
    end
  end

  def destroy
    @restaurant = Restaurant.find_by(params)
    if @restaurant && @restaurant.owner = current_user
      restaurant.destroy
    else
      render json: ["Invalid parameters"], status: 422
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :city, :lat, :lng, :category_id, :website, :telephone)
  end
end
