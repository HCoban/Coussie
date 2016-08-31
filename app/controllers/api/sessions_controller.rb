class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params["username"], params["password"])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end
end