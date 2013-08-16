class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :fbid
      t.string :oatuh_token
      t.datetime :oauth_expires_at
      t.string :provider
      t.string :location
      t.string :image
      t.string :type

      t.timestamps
    end
  end
end
