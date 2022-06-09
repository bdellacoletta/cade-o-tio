class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :students
  extend FriendlyId
  friendly_id :itinerary_title, use: :slugged

  private

  def itinerary_title
    SecureRandom.hex
  end

end
