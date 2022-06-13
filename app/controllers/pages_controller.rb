class PagesController < ApplicationController

  def home
    @itinerary = current_user.itinerary
  end
end
