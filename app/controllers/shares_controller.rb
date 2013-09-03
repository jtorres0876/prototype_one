class SharesController < ApplicationController
	def index
		@user = current_user
		@friends = @user.facebook.get_connection("me", "friends?fields=id,name,picture,installed")	
		@share_list = params[:friend_ids]
		@friendswithapp = []
		@friendswithoutapp = []
		@friend = nil
		@share_list.each do |s|
			@friend = @friends.detect{|f| f['id'] == s }
		 	if (@friend['installed'].blank?)
		 		@friendswithoutapp << @friend['id'].to_i
		 	else 
		 		@friendswithapp << @friend['id'].to_i
		 	end 
		end
	end

	def new
		@user = current_user
    	@friends = @user.facebook.get_connection("me", "friends?fields=id,name,picture,installed")
    	@friendIds = [1]
	end

	def create
		@user = current_user
		@friends = @user.facebook.get_connection("me", "friends?fields=id,name,picture,installed")	
		@share_list = params[:friend_ids]
		@friendswithapp = []
		@friendswithoutapp = []
		@friend = nil
		@share_list.each do |s|
			@friend = @friends.detect{|f| f['id'] == s }
		 	if (@friend['installed'].blank?)
		 		@friendswithoutapp << @friend['id'].to_i
		 	else 
		 		@friendswithapp << @friend['id'].to_i
		 	end 
		end 
		@mytext = 'testing text'
		respond_to do |format|
      		format.html { redirect_to cart_path }
      		format.js 	
    	end
  	end

end
