class ItinerariesController < ApplicationController


  def show
    @itinerary = Itinerary.find(params[:id])

    @markers = @itinerary.students.geocoded.map do |student|
      {
        lat: student.latitude_child,
        lng: student.longitude_child,
        # info_window: render_to_string(partial: "info_window", locals: { itinerary: @itinerary }),
        # image_url: helpers.asset_url("home-icon.png")
        }
    end,
      {
      lat: @itinerary.user.latitude_home,
      lng: @itinerary.user.longitude_home,
      # info_window: render_to_string(partial: "info_window", locals: { itinerary: @itinerary }),
      # image_url: helpers.asset_url("home-icon.png")
      },
      {
      lat: @itinerary.user.latitude_school,
      lng: itinerary.user.longitude_school,
      # info_window: render_to_string(partial: "info_window", locals: { itinerary: @itinerary }),
      # image_url: helpers.asset_url("home-icon.png")
      },
   end
end
