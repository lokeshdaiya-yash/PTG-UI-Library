


import { ChangeDetectorRef, Component, OnInit } from '@angular/core';



import * as L from 'leaflet';

import 'leaflet.markercluster';

import { OpenStreetMapProvider,GeoSearchControl } from "leaflet-geosearch";

import * as GeoSearch from 'leaflet-geosearch';
@Component({
  selector: 'ptg-ui-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent  {

  private map!: L.Map;
  private provider = new OpenStreetMapProvider();
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
        
        minZoom: 10,
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(this.map)

    tiles.addTo(this.map);
    const searchControl:any = GeoSearchControl({

      provider : new OpenStreetMapProvider(),

      autoComplete :true,

      searchLabel : 'Search Location',

      autoCompeteDelay : 250,

      position:'topright',

      marker: {icon:new L.Icon.Default(), draggable:false}

        // style :'bar'

    })

   

    let iconOptions:any = {

      iconUrl: 'assets/marker-icon-2x.png',

      iconSize: [30, 40],

      clickable: true,

        draggable:true,

      }

    this.map.addControl(searchControl);    
    
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
  

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
  }
}
