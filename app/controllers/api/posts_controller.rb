class Api::PostsController < ApplicationController
  before_action :verify_logged_in

  def index
    @posts = current_user.total_posts
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  def show
    @post = Post.find(params[:id])
  end


  private

  def post_params
    params.require(:post).permit(:description, :image)
  end

end
