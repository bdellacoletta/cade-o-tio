class AddColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :home_address, :string
    add_column :users, :school_address, :string
    add_column :users, :car_model, :string
    add_column :users, :car_plate, :string
    add_column :users, :car_color, :string
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
  end
end
