class StaticPagesController < ApplicationController

  def index
  end

  def discover
  	@tracks = Track.all
    @current_track ||= 1
  end
  def next
    @tracks = Track.all
    @current_track ||= 0
  end

  def cart
  end

  def share
  end
  


end
 