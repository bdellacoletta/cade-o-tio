import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

export default class extends Controller {
  static values = {
    apiKey: String,
    points: Object,
    markers: Array,
    id: Number
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10"
    })

    const directions = new MapboxDirections({
      accessToken: this.apiKeyValue,
      unit: 'metric',
      profile: 'mapbox/driving',
      controls: {instructions: false}
    });

    this.map.on('load', () => {
      directions.setOrigin([this.pointsValue.origin.lng, this.pointsValue.origin.lat])

      this.pointsValue.waypoints.forEach((waypoint) => {
        directions.addWaypoint(waypoint.position,[waypoint.lng, waypoint.lat])
      })

      directions.setDestination([this.pointsValue.destination.lng, this.pointsValue.destination.lat])

      this.#addMarkersToMap();
      this.#fitMapToMarkers();
    })

    this.map.addControl(directions);
    this.readCoordinates();
  }

  #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(this.map)
    });
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
  }

  readCoordinates() {
    const url = `/itineraries/${this.idValue}/fetch_coordinates`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      const customMarker = document.createElement("div")
      customMarker.className = "marker"
      customMarker.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/575/575684.png')`
      customMarker.style.backgroundSize = "contain"
      customMarker.style.width = "40px"
      customMarker.style.height = "40px"

        this.driverMarker = new mapboxgl.Marker(customMarker)
        .setLngLat([ data.longitude, data.latitude ])
        .addTo(this.map)
      })
    this.interval = setInterval(this.moveCar.bind(this), 2000)
  }

  moveCar() {
    const url = `/itineraries/${this.idValue}/fetch_coordinates`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        if(this.driverMarker){
          this.driverMarker.remove()
        }
        const customMarker = document.createElement("div")
        customMarker.className = "marker"
        customMarker.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/575/575684.png')`
        customMarker.style.backgroundSize = "contain"
        customMarker.style.width = "40px"
        customMarker.style.height = "40px"

        this.driverMarker = new mapboxgl.Marker(customMarker)
        .setLngLat([ data.longitude, data.latitude ])
        .addTo(this.map)
        this.map.flyTo({center: [data.longitude, data.latitude]})
      })
    }
}
