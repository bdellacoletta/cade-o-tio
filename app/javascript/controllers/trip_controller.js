import { Controller } from "stimulus"
import { csrfToken } from "@rails/ujs"

export default class extends Controller {
  static targets = []
  static values = {
    id: Number
  }

  connect() {
    console.log('Hello world')
  }

  start() {
    if ("geolocation" in navigator) {
      this.interval = setInterval(this.gps.bind(this), 1000)
    } else {
      alert("I'm sorry, but geolocation services are not supported by your browser.");
    }
  }

  stop() {
    clearInterval(this.interval)
  }

  gps() {
    const url = `/itineraries/${this.idValue}/update_coordinates`
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      fetch(url, {
        method: "PATCH",
        headers: { "Accept": "application/json", "X-CSRF-Token": csrfToken(), "Content-Type": "application/json" },
        body: JSON.stringify({latitude: latitude, longitude: longitude})
      })
    });
  }
}
