class DiscoverController < ApplicationController
	
  def index
  	@tracks = Track.all
  end

  def next
  	@tracks = Track.all
    @mytext = 'testing text'
    #respond_to do |format|
      	#format.js 
    #end	
  end

  def prev
  end

end
