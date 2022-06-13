class AddColumnsToStudent < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :child_name, :string
    add_column :students, :child_address, :string
    add_column :students, :position, :integer
    add_column :students, :parents_name, :string
    add_column :students, :parents_email, :string
    add_reference :students, :itinerary, null: false, foreign_key: true
    add_column :students, :token, :string
  end
end
