import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Icon, IconOptions } from 'leaflet';

// import { FontAwesomeOptions, FontAwesomeIcon } from 'leaflet-fa-markers';
import * as L from 'leaflet';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import 'leaflet.markercluster';
import 'leaflet-fa-markers';

@Component({
  selector: 'ptg-ui-leaflet-custom-marker',
  templateUrl: './leaflet-custom-marker.component.html',
  styleUrls: ['./leaflet-custom-marker.component.css']
})
export class LeafletCustomMarkerComponent implements OnInit {

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
    var parkIcon = L.icon({
      iconUrl: 'assets/images/park.png',
    
  
      iconSize:[45,50], // size of the icon
      
  });
  L.marker([18.5602, 73.8031], {icon: parkIcon}).addTo(this.map);
  
  var restaurantsIcon = L.icon({
    iconUrl: 'assets/images/restaurants.png',
  

    iconSize:[45,50], // size of the icon
    
});
L.marker([18.5913, 73.7389], {icon: restaurantsIcon}).addTo(this.map);
var storeIcon = L.icon({
  iconUrl: 'assets/images/store-marker.png',


  iconSize:[45,50], // size of the icon
  
});
L.marker([18.5590, 73.7868], {icon: storeIcon}).addTo(this.map);

var cinemasIcon = L.icon({
  iconUrl: 'assets/images/cinemas.png',


  iconSize:[45,50], // size of the icon
  
});
L.marker([18.5789, 73.7707], {icon: cinemasIcon}).addTo(this.map);
   
var clothingIcon = L.icon({
  iconUrl: 'assets/images/clothing.png',


  iconSize:[45,50], // size of the icon
  
});
L.marker([18.6011, 73.7641], {icon: clothingIcon}).addTo(this.map);

var gadgetsIcon = L.icon({
  iconUrl: 'assets/images/gadgets.png',


  iconSize:[45,50], // size of the icon
  
});
L.marker([18.6298, 73.7997], {icon: gadgetsIcon}).addTo(this.map);
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
