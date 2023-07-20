import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import 'leaflet.markercluster';

@Component({
  selector: 'ptg-ui-count-markers',
  templateUrl: './count-markers.component.html',
  styleUrls: ['./count-markers.component.css']
})
export class CountMarkersComponent implements OnInit {

  private map!: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private initMap(position: any): void {
    this.centroid = position;
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
      // layers: MQ.mapLayer(),
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
    this.cd.detectChanges();
 let legend:any = new L.Control({ position: "bottomleft" });

    legend.onAdd =  () =>{
      const div = L.DomUtil.create("div", "description");
      L.DomEvent.disableClickPropagation(div);
    
      const markersInView = L.DomUtil.create("div", "markers-in-view");
      markersInView.insertAdjacentHTML(
        "beforeend",
        "<h5>Markers in view:<strong>0</strong></h5>"
      );
    
      const allMarkers = L.DomUtil.create("div", "all-markers");
      allMarkers.insertAdjacentHTML(
        "beforeend",
        "<h5>All markers on map: <strong>0</strong><h5>"
      );
    
      div.appendChild(markersInView);
      div.appendChild(allMarkers);
      return div;
    };
    
    legend.addTo(this.map);
    const markers = [
      [ 22.7196,75.8577],
      [ 19.0760, 72.8777],
      [22.5726,88.3639],
      [28.7041,77.1025],
      [31.1471,75.3412 ],
      [26.9124,75.7873],
      [26.8467,80.9462 ],
      [28.5355,77.3910 ],
      [28.4595,77.0266 ],
      [22.5726,88.3639],
      [18.5204,73.8567],
      [ 19.9975, 73.7898 ],
      [ 19.8762,75.3433 ],
      [ 34.0837,74.7973 ],
      [ 23.2599,77.4126],
      [ 30.7333,76.7794 ],
      [12.9716, 77.5946],
      [9.9312, 76.2673],
      [9.9252, 78.1198],
      [8.0883,77.5385],
      [ 13.0827,  80.2707],
      [ 11.1271, 78.6569],
      [  18.1124, 79.0193],
      [52.23710392185826, 21.010279655456547],
      [52.23245191414524, 21.013627052307132],
      [52.23163710555889, 21.00847721099854],
      [52.23418661809385, 21.006503105163578],
      [52.23673598420239, 20.998263359069828],
      [52.23279360361761, 20.992255210876465],
      [52.226853088976455, 20.990538597106937],
      [52.22354077550519, 20.994787216186523],
      [52.23736673260212, 21.029806137084964],
      [52.23032943793832, 21.012237668037415],
      [52.229136732626934, 21.010800004005436],
      [52.22988587358971, 21.011127233505253],
      [52.229708446609365, 21.012618541717533],
    ];
    
    // feature group
    const fg = L.featureGroup().addTo(this.map);
    
    // add markers
    markers.forEach(([lat, lng], index) => {
      L.marker([lat, lng]).addTo(fg);
    });
    
    // feature group add to map
    fg.addTo(this.map);
    
    // ------------------------------------------
    // count all markers on map
  let allMarkersOnMap=()=> {
      let allMarkers:any = document.querySelector(".all-markers strong")as HTMLMapElement
      let allMarkersCount = 0;
    
      // loop through all layers
      this.map.eachLayer((layer) => {
        // if layer is a marker
        if (layer instanceof L.Marker) {
          // increase counter
          allMarkersCount++;
        }
      });
    
      // update counter
      allMarkers.textContent = allMarkersCount;
    }
    // call function
    allMarkersOnMap();
    
    // ------------------------------------------
    // count markers in view
    
  let markersInView=() =>{
      // get map bounds
      const mapBounds = this.map.getBounds();
    
   let markersInView:any = document.querySelector(".markers-in-view strong");
      let markersInViewCount = 0;
    
      // loop through all layers
      let index = 1;
      this.map.eachLayer((layer:any) => {
        // if layer is a marker
        if (layer instanceof L.Marker) {
          // if marker is in map bounds
          if (mapBounds.contains(layer.getLatLng())) {
    
            // increase counter
            markersInViewCount++;
            index++;
          }
        }
      });
    
      // update counter
      markersInView.textContent = markersInViewCount;
    }
    // call function
    markersInView();
    
    // ------------------------------------------
    // count markers in view when map is moved
    
    this.map.on("moveend", function () {
      markersInView();
    });
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
