class SessionsController < ApplicationController

	def create
    	state = request.env['omniauth.params']['state']
    	user = User.from_omniauth(env["omniauth.auth"])
    	session[:user_id] = user.id
    	redirect_to root_url
    end

  	def destroy
    	session[:user_id] = nil
    	redirect_to root_url
  	end
end
