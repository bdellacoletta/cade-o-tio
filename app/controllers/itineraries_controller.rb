class ItinerariesController < ApplicationController

  def create
    @itinerary = Itinerary.new
    @itinerary.user_id = current_user
    @itinerary.current_sequence = current_user.home_address
    if @itinerary.save
      redirect_to itinerary_path(@itinerary)
    else
      redirect_to root_path
    end
  end

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
 
  
   def update
    @itinerary = Itinerary.find(params[:id])
    @student = Student.find(params[:id])
    @itinerary.current_sequence = @student.sequence
    @itinerary.user_id = current_user
    @itinerary.update
    redirect_to itinerary_path(@itinerary)
    end

end
