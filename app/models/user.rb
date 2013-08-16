# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  name             :string(255)
#  fbid             :integer
#  oauth_expires_at :datetime
#  provider         :string(255)
#  location         :string(255)
#  image            :string(255)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  oauth_token      :string(255)
#

class User < ActiveRecord::Base
  attr_accessible :fbid, :image, :location, :name, :oatuh_token, :oauth_expires_at, :provider, :type


  validates :name, presence: true
  
  def self.from_omniauth(auth)
    where(auth.slice(:provider, :fbid)).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.fbid = auth.uid
      user.name = auth.info.name unless user.name 
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.location = auth.info.location
      user.image = auth.info.image unless user.image
      user.save!
    end
  end

  def facebook
   @facebook ||= Koala::Facebook::API.new(oauth_token)
  end

end
