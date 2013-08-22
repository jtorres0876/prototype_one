class SharesController < ApplicationController
	def index
		@user = current_user
		@share_list = params[:friend_ids].map(&:to_i)
		@friends = @user.facebook.get_connection("me", "friends")
	end

	def new
		@user = current_user
    	@friends = @user.facebook.get_connection("me", "friends")
    	@friendIds = [1]
	end

	def create	
		@share_list = params[:friend_ids].map(&:to_i)
		
		@mytext = 'testing text'
		@friends_with_app = []
		@friends_without_app = [100005817697208,100006038289344]
		respond_to do |format|
      		format.html { redirect_to cart_path }
      		format.js
    	end
  	end

end
