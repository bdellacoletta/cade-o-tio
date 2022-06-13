class RemoveTokenFromStudents < ActiveRecord::Migration[6.1]
  def change
    remove_column :students, :token, :string
  end
end
