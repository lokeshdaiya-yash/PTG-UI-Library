import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
@Component({
  selector: 'app-location-tracker',
  templateUrl: './location-tracker.component.html',
  styleUrls: ['./location-tracker.component.css'],
})
export class LocationTrackerComponent implements OnInit {
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
    );
    // Icon options
// Icon options
let iconOptions:any = {
  iconUrl: '/assets/marker-icon-2x.png',
  iconSize: [30, 40],
  clickable: true,
    draggable:true,
  }
  // var pointA = new L.LatLng(18.5204, 73.8567);
  //   var pointB = new L.LatLng(18.7557, 73.4091);
  //   var pointList = [pointA, pointB];

  //   var firstpolyline = new L.Polyline(pointList ,{
  //   color: 'red',
  //   weight: 3,
  //   opacity: 0.5
  //   // smoothFactor: 1

  //   });
 
  let markerOptions:any = {
    title: "MyLocation",
    clickable: true,
    

    }
    
//     let location =position as L.LatLngExpression;
//  console.log(location)
// // let markers= L.marker(position as L.LatLngExpression,markerOptions).addTo(this.map)
//     this.map.on('click', (e) => {
//       console.log(e);
//       var secondmarker =  L.marker([e.latlng.lat,e.latlng.lng],{icon: customIcon}).addTo(this.map);
//           L.Routing.control({
//       waypoints: [
//         L.latLng(location),
//         L.latLng(e.latlng.lat,e.latlng.lng)
//       ]
//     }).addTo(this.map); 
//   //   .on('routesfound',(e)=>{
//   //     console.log(e);
//   //     e.routes[0].coordinations.forEach((coord,index)=>{
//   //  setTimeout(() => {
//   //   location.setLatLng([coord.lat,coord.lng])
//   //  }, 100*index);
//   //     })
//   //   })
    
    
//       })
    
    // L.routing.control({
    //   waypoints: [
    //     L.latLng(18.5204, 73.8567),
    //     L.latLng(18.7557, 73.4091)
    //   ]
      
    // }).addTo(this.map); 
  // Creating a custom icon
  
  
 
    L.marker(position as L.LatLngExpression,markerOptions)
      .addTo(this.map)
      .addEventListener('click', (r) => {
      });
    const jittery = Array(0)
      .fill(this.centroid)
      .map((x) => {
        if (x < 1) {
          return [
            position[0] + (Math.random() - 0.8) / 1,
            position[1] + (Math.random() - 0.8) / 1,
          ];
        } else {
          return [
            position[0] - (Math.random() - 0.8) / 1,
            position[1] - (Math.random() - 0.8) / 1,
          ];
        }
      })
      .map((x) => L.marker(x as L.LatLngExpression))
      .forEach((x) => x.addTo(this.map));

    tiles.addTo(this.map);
    // tiles.marker(this.position).addTo(this.map);
    this.cd.detectChanges();
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
 
  

  ngOnInit(): void { if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }}
}
