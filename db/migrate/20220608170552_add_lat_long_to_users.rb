class AddLatLongToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :latitude_home, :float
    add_column :users, :longitude_home, :float
    add_column :users, :latitude_school, :float
    add_column :users, :longitue_school, :float
  end
end
