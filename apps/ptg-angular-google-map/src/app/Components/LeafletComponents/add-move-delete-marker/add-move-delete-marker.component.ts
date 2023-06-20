
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
@Component({
  selector: 'ptg-ui-add-move-delete-marker',
  templateUrl: './add-move-delete-marker.component.html',
  styleUrls: ['./add-move-delete-marker.component.css']
})
export class AddMoveDeleteMarkerComponent implements OnInit {

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



    //ADD delete marker
    let addMarker: any = (e: any): void => {
      // Add marker to map at click location
      let markerPlace: any = document.querySelector(".marker-position") as HTMLMapElement
      markerPlace.textContent = `new marker: ${e.latlng.lat}, ${e.latlng.lng}`;

      let marker: any = L.marker(e.latlng, {
        draggable: true,
        
      })
        .addTo(this.map);
        

      // event remove marker
      marker.on("popupopen", removeMarker);
      // markers.addLayer(marker)
      marker.on("dragend", function () {
        let markerPlace: any = (document.querySelector(".marker-position")) as HTMLMapElement;
        markerPlace.textContent = `Coordinates: ${marker.getLatLng().lat}, ${marker.getLatLng().lng
          }`;
      });
    }

    this.map.on("click", addMarker);

   

    const markerPlace = (document.querySelector(".marker-position")) as HTMLMapElement;
    let removeMarker = (): void => {
      let marker: any = this;
      let btn: any = (document.querySelector(".remove")) as HTMLMapElement;
      btn.addEventListener("click", (): void => {
        markerPlace.textContent = "goodbye marker 💩";
        marker.remove()

      });
    }

    // Icon options
    // Icon options
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
  constructor(private cd: ChangeDetectorRef) { }
 

  ngOnInit(): void { if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }}


}
