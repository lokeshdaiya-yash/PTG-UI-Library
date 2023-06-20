import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from 'apps/ptg-angular-google-map/src/app/mapstyle';

@Component({
  selector: 'ptg-ui-control-map-outside',
  templateUrl: './control-map-outside.component.html',
  styleUrls: ['./control-map-outside.component.css']
})
export class ControlMapOutsideGoogleComponent implements OnInit {

 // private map!: google.maps.Map;
 constructor() {}
 ngOnInit(): void {
   let InfoObj:any[]= [];
   //load the google map on the browser
   let loader = new Loader({
     apiKey: 'AIzaSyCx2Q7plHHDo8JEpEJVNXaWnzkUXqfmCo4'
   })
   loader.load().then(() => {
     //given location latitude and longtitude
     const location = {
       lat: 20.5937, lng: 78.9629,
     };
     const map = new google.maps.Map(document.getElementById("map") as HTMLMapElement, {
       center: location,
       zoom: 4.5,
       styles:styles,
       // mapTypeId: 'satellite'
       
     })
     let markers: google.maps.Marker[] = [];
     map.addListener("click", (event: google.maps.MapMouseEvent) => {
       addMarker(event.latLng!);
     });
   
     // add event listeners for the buttons
     document
       .getElementById("show-markers")!
       .addEventListener("click", showMarkers);
     document
       .getElementById("hide-markers")!
       .addEventListener("click", hideMarkers);
     document
       .getElementById("delete-markers")!
       .addEventListener("click", deleteMarkers);
   
     // Adds a marker at the center of the map.
     addMarker(location);
   
   
   // Adds a marker to the map and push to the array.
   function addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral) {
     const marker = new google.maps.Marker({
       position,
       map,
     });
   
     markers.push(marker);
   }
   
// Sets the map on all markers in the array.
function setMapOnAll(map: google.maps.Map | null) {
 for (let i = 0; i < markers.length; i++) {
   markers[i].setMap(map);
 }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers(): void {
 setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers(): void {
 setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers(): void {
 hideMarkers();
 markers = [];
}
 })
 }

}
