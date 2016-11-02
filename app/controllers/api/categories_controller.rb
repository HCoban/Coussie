class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
  end

  def show
    category = Category.find(params[:id])
    @restaurants = category.restaurants
    render "api/restaurants/index"
  end
end
