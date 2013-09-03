class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :get_tracks
  #include SessionsHelper

	private

	def current_user
	  @current_user ||= User.find(session[:user_id]) if session[:user_id]
	end
	helper_method :current_user

	def get_tracks
	  @tracks ||= Track.all	
	end 
end
