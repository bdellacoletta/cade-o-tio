class AddColumnsToItinerary < ActiveRecord::Migration[6.1]
  def change
    add_column :itineraries, :current_sequence, :integer
    add_reference :itineraries, :user, foreign_key: true
  end
end
