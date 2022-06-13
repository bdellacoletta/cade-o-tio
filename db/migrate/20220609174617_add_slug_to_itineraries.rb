class AddSlugToItineraries < ActiveRecord::Migration[6.1]
  def change
    add_column :itineraries, :slug, :string
    add_index :itineraries, :slug, unique: true
  end
end
