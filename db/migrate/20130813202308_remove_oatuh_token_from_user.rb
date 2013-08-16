class RemoveOatuhTokenFromUser < ActiveRecord::Migration
  def up
    remove_column :users, :oatuh_token
  end

  def down
    add_column :users, :oatuh_token, :string
  end
end
