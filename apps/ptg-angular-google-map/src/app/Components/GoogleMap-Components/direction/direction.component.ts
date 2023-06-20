
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { styles } from 'apps/ptg-angular-google-map/src/app/mapstyle';


@Component({
  selector: 'ptg-ui-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

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
     const directionsService = new google.maps.DirectionsService();
     const directionsRenderer = new google.maps.DirectionsRenderer();
     directionsRenderer.setMap(map);

     const onChangeHandler = function () {
       calculateAndDisplayRoute(directionsService, directionsRenderer);
     };

 (document.getElementById("start") as HTMLElement).addEventListener(
   "change",
   onChangeHandler
 );
 (document.getElementById("end") as HTMLElement).addEventListener(
   "change",
   onChangeHandler
 );
 function calculateAndDisplayRoute(
   directionsService: google.maps.DirectionsService,
   directionsRenderer: google.maps.DirectionsRenderer
 ) {
   directionsService
     .route({
       origin: {
         query: (document.getElementById("start") as HTMLInputElement).value,
       },
       destination: {
         query: (document.getElementById("end") as HTMLInputElement).value,
       },
       travelMode: google.maps.TravelMode.DRIVING,
     })
     .then((response) => {
       directionsRenderer.setDirections(response);
     })
     .catch((e) => window.alert("Directions request failed due to " + status));
 }
 
        
 })

 }
 
}
