import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
@Component({
  selector: 'ptg-ui-marker-cluster',
  templateUrl: './marker-cluster.component.html',
  styleUrls: ['./marker-cluster.component.css']
})
export class MarkerClusterComponent {

  private map!: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private initMap(position: any): void {
    this.centroid = position;
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
    
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        
        minZoom: 2,
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(this.map)
     let config = {
      minZoom: 6,
      maxZoom: 18,
    };
    // magnification with which the map will start
   let  minZoom: 10
      let  maxZoom: 18
    // coordinates
    const lat = 51.9189046;
    const lng = 19.1343786;
    
    
    
    // coordinate array with popup text
    let points = [
      [18.5602, 73.8031, "point 1"],
      [18.5913, 73.7389, "point 2"],
      [18.5590, 73.7868, "point 3"],
      [18.5789, 73.7707, "point 4"],
      [18.6011, 73.7641, "point 5"],
      [18.5538, 73.9477, "point 6"],
      [18.5089, 73.9259, "point 7"],
      [18.5808, 73.9787, "point 8"],
      [18.5529, 73.8797, "point 9"],
      [18.4529, 73.8652, "point 10"],
      [18.4695, 73.8890, "point 11"],
      [18.4471, 73.8102, "point 12"],
      [18.7557, 73.4091, "point 13"],
      [18.7448, 73.4817, "point 14"],
      [18.7650, 73.4538, "point 15"],
      [18.7600, 73.4041, "point 16"],
    ];
    let markers = L.markerClusterGroup();

// Add markers to the layer
for (let i = 0; i < points.length; i++) {
  let [lat, lng, title]:any = points[i];

  let marker = L.marker(new L.LatLng(lat, lng), {
    draggable: true,
    autoPan: true,
  }).bindPopup(title);
  markers.addLayer(marker)
  marker.on("dragend", function (e) {
    let markerPlace:any = (document.querySelector(".marker-position"))as HTMLMapElement;
    markerPlace.textContent = `${marker.getLatLng().lat}, ${
      marker.getLatLng().lng
    }`;
  });
}
this.map.addLayer(markers)


//ADD delete marker
   

    // Icon options
// Icon options


  
   
  
  
  //  let marker1= L.marker(position as L.LatLngExpression)
  //     .addTo(this.map)
  //     .addEventListener('click', (r) => {
  //     });
  //     console.log(marker1.toGeoJSON())
  //   const jittery = Array(0)
  //     .fill(this.centroid)
  //     .map((x) => {
  //       if (x < 0) {
  //         return [
  //           position[0] + (Math.random() - 0.8) / 1,
  //           position[1] + (Math.random() - 0.8) / 1,
  //         ];
  //       } else {
  //         return [
  //           position[0] - (Math.random() - 0.8) / 1,
  //           position[1] - (Math.random() - 0.8) / 1,
  //         ];
  //       }
  //     })
  //     .map((x) => L.marker(x as L.LatLngExpression))
  //     .forEach((x) => x.addTo(this.map));
 
    tiles.addTo(this.map);
    // tiles.marker(this.position).addTo(this.map);
    // this.cd.detectChanges();
  }
  private position: any = null;
  showPosition(position: any) {
    if (this.position == null) {
      let p = [position.coords.latitude, position.coords.longitude];
      this.position = p;
      setTimeout(() => {
        this.initMap(p);
      });
    }
  }
  constructor(private cd: ChangeDetectorRef) {}
  

  ngOnInit(): void {if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }}


}
