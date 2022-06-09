import { Controller } from "@hotwired/stimulus"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

export default class extends Controller {
  static values = { apiKey: String }

  static targets = ["child_address","home_address", "school_adress"]

  connect() {
    this.geocoder = new MapboxGeocoder({
      accessToken: this.apiKeyValue,
      types: "country,region,place,postcode,locality,neighborhood,address"
    });
    this.geocoder.addTo(this.element)

    this.geocoder.on("result", event => this.#setInputValue(event))
    this.geocoder.on("clear", () => this.#clearInputValue())
  }

  #setInputValue(event) {
    this.child_addressTarget.value = event.result["place_name"]
    this.home_addressTarget.value = event.result["place_name"]
    this.school_addressTarget.value = event.result["place_name"]
  }

  #clearInputValue() {
    this.child_addressTarget.value = ""
    this.home_addressTarget.value = ""
    this.school_addressTarget.value = ""
  }
}
