class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :itineraries
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, :last_name, :home_address, :school_address, :car_model, :car_plate, :car_color, presence: true
  validates :car_plate, format: { with: /[a-zA-Z]{3}[0-9][0-9a-zA-Z][0-9]{2}/, message: 'Apenas letras e números' }
end
