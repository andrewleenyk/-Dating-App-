class PostsController < ApplicationController

    before_action :set_post, only: [:show, :update, :destroy]
    before_action :authorize_request, only: [:create, :update, :destroy]
    before_action :set_user_post, only: [:update, :destroy]

    def index
        @posts = Post.all
        render json: @posts
    end

    def show
        render json: @post
    end
    
    def create
        @post = Post.new(post_params)
        @post.user = @current_user
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

    def set_user_post
        @post = @current_user.posts.find(params[:id])
      end
    

    def post_params
        params.require(:post).permit(:title, :body)
    end
end
