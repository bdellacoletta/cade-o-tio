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
      {
        lat: student.latitude_child,
        lng: student.longitude_child,
        # info_window: render_to_string(partial: "info_window", locals: { itinerary: @itinerary }),
        # image_url: helpers.asset_url("home-icon.png")
        }
    end
    @markers <<
      {
      lat: @itinerary.user.latitude_home,
      lng: @itinerary.user.longitude_home,
      # info_window: render_to_string(partial: "info_window", locals: { itinerary: @itinerary }),
      # image_url: helpers.asset_url("home-icon.png")
      }

    @markers <<
      {
      lat: @itinerary.user.latitude_school,
      lng: @itinerary.user.longitude_school,
      # info_window: render_to_string(partial: "info_window", locals: { itinerary: @itinerary }),
      # image_url: helpers.asset_url("home-icon.png")
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
