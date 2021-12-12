class PostsController < ApplicationController

    before_action :set_post, only: [:show, :update, :destroy]

    def index
        @user = User.find(params[:user_id])
        @posts = Post.where(user_id: @user.id)
        render json: @posts, include: :user, status: :ok
    end

    def show
        render json: @post
    end
    
    def create
        @post = Post.new(post_params)

        if @post.save
            render json: @post, status: :created
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end
    
    def update
        if @post.update(post_params)
            render json: @post, status: :updated
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @post.destroy
    end
    
    private
    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:title, :body)
    end
end
