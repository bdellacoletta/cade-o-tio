class RemoveColumnsFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :latitude, :float
    remove_column :users, :longitude, :float
  end
end
