class ItinerariesController < ApplicationController


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
end
