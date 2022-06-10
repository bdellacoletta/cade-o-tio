class ItinerariesController < ApplicationController
  def show

    @itinerary = Itinerary.friendly.find(params[:id])

    @markers = @itinerary.students.order(:sequence).map do |student|
      { lat: student.latitude_child, lng: student.longitude_child }
    end

    @points = {
      origin: {
        lat: @itinerary.user.latitude_home,
        lng: @itinerary.user.longitude_home
      },

      waypoints: @itinerary.students.order(:sequence).map do |student|
        {
          sequence: student.sequence,
          lat: student.latitude_child,
          lng: student.longitude_child
        }
      end,

      destination: {
        lat: @itinerary.user.latitude_school,
        lng: @itinerary.user.longitude_school
      }
    }
  end
end
