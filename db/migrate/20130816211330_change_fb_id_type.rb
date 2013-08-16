class ChangeFbIdType < ActiveRecord::Migration
  def up
  	change_column :users, :fbid, :bigint
  end

  def down
  	change_column :users, :fbid, :int
  end
end
