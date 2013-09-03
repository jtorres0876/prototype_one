class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :url
      t.string :name
      t.string :artist
      t.string :photo

      t.timestamps
    end
  end
end
