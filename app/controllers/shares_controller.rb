class SharesController < ApplicationController
	def index
		@user = current_user
		@friends = @user.facebook.get_connection("me", "friends")
	end

	def new
		@user = current_user
    	@friends = @user.facebook.get_connection("me", "friends")
	end

	def create	
		@share_list = params[:friend_ids]
		@friends_with_app = []
		@friends_without_app = []
		redirect_to cart_path
  	end

end
