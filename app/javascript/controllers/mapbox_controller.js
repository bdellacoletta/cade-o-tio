import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

export default class extends Controller {
  static values = {
    apiKey: String,
    points: Object,
    markers: Array
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
        directions.addWaypoint(waypoint.sequence,[waypoint.lng, waypoint.lat])
      })

      directions.setDestination([this.pointsValue.destination.lng, this.pointsValue.destination.lat])
      this.#addMarkersToMap();
      this.#fitMapToMarkers();
    })

    this.map.addControl(directions);
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
}
