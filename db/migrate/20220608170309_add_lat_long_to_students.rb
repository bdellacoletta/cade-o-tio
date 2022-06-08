class AddLatLongToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :latitude_child, :float
    add_column :students, :longitude_child, :float
  end
end
