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

require 'spec_helper'

describe User do
  pending "add some examples to (or delete) #{__FILE__}"
end
