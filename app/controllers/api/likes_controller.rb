class Api::LikesController < ApplicationController
  before_action :verify_logged_in

  def create
    @like = current_user.likes.new(post_id: params[:post_id])

    if @like.save
      @post = Post.find(params[:post_id])
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:post_id])
    @like.destroy
    @post = Post.find(params[:post_id])
    render "api/posts/show"
  end

end
