class AddCoordinatesToItineraries < ActiveRecord::Migration[6.1]
  def change
    add_column :itineraries, :latitude, :float
    add_column :itineraries, :longitude, :float
  end
end
