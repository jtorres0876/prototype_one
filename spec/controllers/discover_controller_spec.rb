require 'spec_helper'

describe DiscoverController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'next'" do
    it "returns http success" do
      get 'next'
      response.should be_success
    end
  end

  describe "GET 'prev'" do
    it "returns http success" do
      get 'prev'
      response.should be_success
    end
  end

end
