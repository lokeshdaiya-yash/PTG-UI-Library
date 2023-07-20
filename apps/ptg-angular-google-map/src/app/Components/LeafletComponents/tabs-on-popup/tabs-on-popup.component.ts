import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
;
import 'leaflet.markercluster';

@Component({
  selector: 'ptg-ui-tabs-on-popup',
  templateUrl: './tabs-on-popup.component.html',
  styleUrls: ['./tabs-on-popup.component.css']
})
export class TabsOnPopupComponent implements OnInit {
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
    const customPopup = `<div class="customPopup">

   

    <div id="town-hall-tower">

      <figure><img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/SHANIWAR_WADA.jpg" style="height: 202px; width: auto; margin: auto;"></figure>

      

      <div>Pune is widely regarded to be the second major IT hub and the most important automobile and manufacturing hub in India. It is also known as the 'Oxford of the East' given the presence of a wide range of educational institutions.</div>

    </div>

  </div>`;



// specify popup options

const customOptions:any = {

  minWidth: "220", // set max-width

  keepInView: true, // Set it to true if you want to prevent users from panning the popup off of the screen while it is open.

};



// center map when click on marker

let runTabs = ()=> {

  // const tabs: any = new Tabby("[data-tabs]");

}

// create marker object, pass custom icon as option, pass content and options to popup, add to map

const marker = L.marker([18.5204, 73.8567])

  .bindPopup(customPopup, customOptions)

  .on("click", runTabs);



marker.addTo(this.map);



    

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
