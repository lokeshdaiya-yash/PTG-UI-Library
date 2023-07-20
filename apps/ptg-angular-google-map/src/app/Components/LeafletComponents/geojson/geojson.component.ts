
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import 'leaflet-draw';
import * as $ from "jquery";
import * as GeoJSON from 'geojson';
@Component({
  selector: 'ptg-ui-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.css']
})
export class GeojsonComponent implements OnInit {

  private map!: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private initMap(position: any): void {
    this.centroid = position;
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 20,
      
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
  //   new LeafletToolbar.DrawToolbar({
  //     position: 'topleft'
  // }).addTo(this.map);
  
    let geo_layer = L.geoJSON();
    var editableLayers = new L.FeatureGroup([geo_layer]);
    this.map.addLayer(editableLayers);
    // tiles.marker(this.position).addTo(this.map);
    var geojsonFeature = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

    var jsonLayer =  L.geoJSON().addTo(this.map);
    $.ajax({
      dataType: 'jsonp',
      
      url: geojsonFeature,
      success: (data:any) =>{
          $(data.features).each((key:any, data:any)=> {
              jsonLayer.addData(data);
          });
      }
    });
    let options:any = {
      position: 'topright',
      draw: {
        polyline: true,
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons 
          drawError: {
            color: '#e1e100', // Color the shape will turn when intersects 
            message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect 
          }
        },
        circle: true, // Turns off this drawing tool 
        rectangle: false,
        marker: true
      },
      edit: {
        featureGroup: editableLayers, //REQUIRED!! 
        remove: true
      }
    };
    var drawControl = new L.Control.Draw(options);
    this.map.addControl(drawControl);


    this.map.on(L.Draw.Event.CREATED, (e:any)=> {
  var type = e.layerType,
    layer = e.layer;

  if (type === 'marker') {
    layer.bindPopup('A popup!');
  }

  editableLayers.addLayer(layer);
});
// var drawControl = new L.Control.Draw({
//   position: 'topright'
// });
//     this.map.addControl(drawControl);
let geojsonLayer:any= new L.GeoJSON();       
geojsonLayer.addTo(this.map);
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
