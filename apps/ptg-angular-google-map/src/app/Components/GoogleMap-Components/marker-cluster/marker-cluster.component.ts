
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { styles } from 'apps/ptg-angular-google-map/src/app/mapstyle';

@Component({
  selector: 'ptg-ui-marker-cluster',
  templateUrl: './marker-cluster.component.html',
  styleUrls: ['./marker-cluster.component.css']
})
export class MarkerClustersComponent implements OnInit {

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
         
        const infoWindow = new google.maps.InfoWindow({
          content: "",
          disableAutoPan: true,
        });
         
        const locations = [
          { lat: 22.7196, lng: 75.8577 },
          { lat: 19.0760,  lng: 72.8777 },
          { lat: 22.5726,lng:  88.3639 },
          { lat: 28.7041,  lng: 77.1025 },
          { lat: 31.1471, lng: 75.3412 },
          { lat: 26.9124,  lng: 75.7873 },
          { lat: 26.8467, lng: 80.9462 },
          { lat: 28.5355, lng: 77.3910 },
          { lat: 28.4595, lng: 77.0266 },
          { lat: 22.5726, lng: 88.3639 },
          { lat: 18.5204, lng:  73.8567 },
          { lat: 19.9975, lng: 73.7898 },
          { lat: 19.8762, lng: 75.3433 },
          { lat: 34.0837, lng: 74.7973 },
          { lat: 23.2599, lng: 77.4126 },
          { lat: 30.7333, lng: 76.7794 },
          { lat: 12.9716, lng: 77.5946 },
          { lat: 9.9312, lng: 76.2673 },
          { lat: 9.9252, lng: 78.1198 },
          { lat: 8.0883, lng: 77.5385 },
          { lat: 13.0827, lng: 80.2707 },
          { lat: 11.1271, lng: 78.6569},
          { lat: 18.1124, lng: 79.0193 },
        ];
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       
       let markers = locations.map((position, i) => {
          const label = labels[i % labels.length];
          const marker = new google.maps.Marker({
            position,
            label,
          });
          marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
          });
      
          return marker;
        })
  
        const markerCluster = new MarkerClusterer({map, markers} );
       
       
        
     
       
        
           
           
    })
  
    }

}
