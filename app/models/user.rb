class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :itineraries
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, :last_name, :home_address, :school_address, :car_model, :car_plate, :car_color, presence: true
  validates :car_plate, format: { with: /[a-zA-Z]{3}[0-9][0-9a-zA-Z][0-9]{2}/, message: 'Apenas letras e números' }

  geocoded_by :home_address, :latitude  => :latitude_home, :longitude => :longitude_home
  geocoded_by :school_address, :latitude  => :latitude_school, :longitude => :longitude_school
  after_validation :geocode, if: :will_save_change_to_home_address?
  after_validation :geocode, if: :will_save_change_to_school_address?
end
