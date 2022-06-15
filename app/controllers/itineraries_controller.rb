class ItinerariesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :fetch_coordinates]

  def show
    @itinerary = Itinerary.friendly.find(params[:id])
    redirect_to root_path unless params[:id] == @itinerary.slug

    @markers = @itinerary.students.order(:position).map do |student|
      { lat: student.latitude_child, lng: student.longitude_child }
    end

    @points = {
      origin: {
        lat: @itinerary.user.latitude_home,
        lng: @itinerary.user.longitude_home
      },

      waypoints: @itinerary.students.order(:position).map do |student|
        {
          position: student.position,
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

  def update
    @itinerary = Itinerary.find(params[:id])
    @student = Student.find(params[:id])
    @itinerary.current_sequence = @student.position
    @itinerary.update
    redirect_to itinerary_path(@itinerary)
  end

  def update_coordinates
    @itinerary = Itinerary.find(params[:id])
    @itinerary.latitude = params[:latitude]
    @itinerary.longitude = params[:longitude]
    @itinerary.save!
  end

  def fetch_coordinates
    @itinerary = Itinerary.find(params[:id])
    @coordinates = { latitude: @itinerary.latitude, longitude: @itinerary.longitude }.to_json
    render json: @coordinates
  end
end
