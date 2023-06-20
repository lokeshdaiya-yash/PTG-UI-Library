import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import 'leaflet.markercluster';
import * as turf from '@turf/turf';

@Component({
  selector: 'ptg-ui-great-circle',
  templateUrl: './great-circle.component.html',
  styleUrls: ['./great-circle.component.css']
})
export class GreatCircleComponent implements OnInit {

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



    tiles.addTo(this.map);

    // tiles.marker(this.position).addTo(this.map);

     const cityCoords = [

      [22.5726, 88.3639], // kolkata

      [28.7041, 77.1025], // delhi

      [12.9716, 77.5946], // Bengaluru

      [25.2048, 55.2708]//Dubai

    ];

   

     const icon = L.icon({

      iconUrl: "http://grzegorztomicki.pl/serwisy/pin.png",

      iconSize: [50, 58], // size of the icon

      iconAnchor: [20, 58], // changed marker icon position

      popupAnchor: [0, -60], // changed popup position

    });

    const center = [73.8567,18.5204];
    

// start point
const start = turf.point(center);

L.marker([ 18.5204, 73.8567], { icon: icon })
.bindPopup(`Pune<br>${center.toString()}`)
.addTo(this.map);

const featureGroups:any = [];

cityCoords.map((city:any) => {
// all markers to map
const marker = L.marker(city).bindPopup(`MARKER<br>${city.toString()}`).addTo(this.map);
 // add marker to array
featureGroups.push(marker);
 // end point
 const end = turf.point(city.reverse());

  // distance between two points
  const greatCircle = turf.greatCircle(start, end);

  // set geoJSON to map
  L.geoJSON(greatCircle).addTo(this.map);
});

// ------------------------------
// add array to featureGroup
const group =  L.featureGroup(featureGroups);

// set map view to featureGroup
    this.map.fitBounds(group.getBounds(), {
  padding: [50, 50], // adding padding to map
});

  }
  private position: any = null;
  showPosition(position: any) {
    if (this.position == null) {
      const p = [position.coords.latitude, position.coords.longitude];
      this.position = p;
      setTimeout(() => {
        this.initMap(p);
      });
    }
  }
  constructor(private cd: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
      }
}


}
