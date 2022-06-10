class RenameLongitueSchoolFromUsers < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :longitue_school, :longitude_school
  end
end
