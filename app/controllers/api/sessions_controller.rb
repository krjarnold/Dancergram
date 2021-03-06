class Api::SessionsController < ApplicationController
  before_action :verify_logged_in, except: [:create]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username or Password"], status: 401
    end

  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: ["Logged out"]
    else
      render json: { base: ["Not Signed In"] }, status: 404
    end
  end

end
