
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

import 'leaflet.markercluster';

@Component({
  selector: 'ptg-ui-tile-layer',
  templateUrl: './tile-layer.component.html',
  styleUrls: ['./tile-layer.component.css']
})
export class TileLayerComponent implements OnInit {

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
        
        minZoom: 10,
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(this.map)

    tiles.addTo(this.map);
    // tiles.marker(this.position).addTo(this.map);
    this.cd.detectChanges();
    
   let marker= L.marker([18.5204, 73.8567]).addTo(this.map).bindPopup("Pune");
    let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
      });
  googleStreets.addTo(this.map);
  let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(this.map);
let googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleTerrain.addTo(this.map);
let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleHybrid.addTo(this.map);
let baseLayers = {
 
  "OpenStreetMap":tiles,
  "satellite":googleSat,
  "googleMap":googleStreets,
  "Terrain":googleTerrain,
  "Hybrid":googleHybrid
};

var overlays = {
  "Marker": marker,
 
};

L.control.layers(baseLayers, overlays).addTo(this.map);
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
