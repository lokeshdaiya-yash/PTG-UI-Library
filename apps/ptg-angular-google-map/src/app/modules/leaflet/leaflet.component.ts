import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

// import { FontAwesomeOptions, FontAwesomeIcon } from 'leaflet-fa-markers';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet-fa-markers';
import 'leaflet-control-geocoder';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// declare var geocoder: any;
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {
  private map!: L.Map;

  private centroid: L.LatLngExpression = [18.551451, 73.934784];


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
    ).addTo(this.map);








    tiles.addTo(this.map);
    // tiles.marker(this.position).addTo(this.map);
    this.cd.detectChanges();

    // })


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
  constructor(private cd: ChangeDetectorRef) { }

  // throw new Error('Method not implemented.');



  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
  }


}


