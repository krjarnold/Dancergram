class Api::FollowsController < ApplicationController
  before_action :verify_logged_in

  def index
    @follows = Follow.all
  end

  def show
    @show = Follow.find_by(user_id: current_user.id)
  end

  def create
    @follow = current_user.follows.new(followed_user_id: params[:user_id])

    if @follow.save
      @user = User.find(params[:user_id])
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows.find_by(followed_user_id: params[:user_id])
    @follow.destroy
    @user = User.find(params[:user_id])
    render "api/users/show"
  end

  #
  # private
  #
  # # def follow_params
  # #   params.require(:follow).permit(:followed_user_id)
  # end

end
