import { Component, OnInit } from '@angular/core';
import {  AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
@Component({
  selector: 'app-route-polyline',
  templateUrl: './route-polyline.component.html',
  styleUrls: ['./route-polyline.component.css']
})
export class RoutePolylineComponent implements OnInit {
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
  
  }
  
 
    
    let location =position as L.LatLngExpression;
 console.log(location)

    this.map.on('click', (e) => {
      console.log(e);
      //  L.marker([e.latlng.lat,e.latlng.lng],{icon: customIcon})
      // let m:any=[e.latlng.lat,e.latlng.lng];
      // L.marker(m).addTo(this.map)

      L.Routing.control({
      waypoints: [
        L.latLng(location),
        L.latLng(e.latlng.lat,e.latlng.lng)
        
      ]
    }).addTo(this.map); 

    
    
      })
    
      

  
  
 
    L.marker(position as L.LatLngExpression)
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



