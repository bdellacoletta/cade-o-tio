class Student < ApplicationRecord
  belongs_to :Itinerary

  validates :child_name, :child_address, :sequence, :parents_name, :parents_email, presence: true
  validates :parents_email, format: { with: /\S+@\S+\.\S+/ }
end
