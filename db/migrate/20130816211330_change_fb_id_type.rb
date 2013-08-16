class ChangeFbIdType < ActiveRecord::Migration
  def up
  	change_column :users, :fbid, :integer, :limit => 8
  end

  def down
  	change_column :users, :fbid, :integer
  end
end
