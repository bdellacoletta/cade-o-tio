class Student < ApplicationRecord
  acts_as_list

  belongs_to :itinerary

  validates :child_name, :child_address, :position, :parents_name, :parents_email, presence: true
  validates :parents_email, format: { with: /\S+@\S+\.\S+/ }


  geocoded_by :child_address, :latitude  => :latitude_child, :longitude => :longitude_child
  after_validation :geocode, if: :will_save_change_to_child_address?
end
