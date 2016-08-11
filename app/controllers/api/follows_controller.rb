class Api::FollowsController < ApplicationController
  before_action :verify_logged_in

  def index
    @follows = Follow.all
  end

  def create
    @follow = Follow.new(follow_params)
    @follow[:used_id] = current_user.id
#
    if @post.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(
      {user_id: current_user.id},
       followed_user_id: follow_params[:followed_user_id]}
       )

    # Check this method

    @follow.destroy
    render 'api/follows/show'
  end


  private

  def follow_params
    params.require(:follow).permit(:followed_user_id)
  end

end
