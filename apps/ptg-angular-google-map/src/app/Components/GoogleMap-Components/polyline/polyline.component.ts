import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from '../../../mapstyle'; 

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.component.html',
  styleUrls: ['./polyline.component.css']
})
export class PolylineComponent {

  
  private map!: google.maps.Map;
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
      var markersOnMap = [
        
          
        {
          placeName: 'kOLKATA',
          LatLng: [{
            lat: 22.5726, 
            lng:88.3639 
          }],
          type: 'blankIcon'
        },
        {
          placeName: 'NAGPUR',
          LatLng: [{
             lat: 21.146633,
              lng: 79.088860 
          }],
          type: 'blankIcon'
        },
      ]

      this.map = new google.maps.Map(document.getElementById("map") as HTMLMapElement, {
        center: location,
        zoom: 4.5,
        styles:styles,
        // mapTypeId: 'satellite'
      })
       
      
     
      var icons: Record<string, { icon: any}> = {
        clothing: {
          icon: "assets/images/clothing.png"
        },
        cinemas: {
          icon: 'assets/images/cinemas.png'
        },
        garden: {
          icon: 'assets/images/envato-marker.png'
        },
        restaurants: {
          icon: 'assets/images/restaurants.png'
        },
        blankIcon:{
      icon:'./assets/images/blank-marker.png'
        }
      };
     
      const flightPlanCoordinates = [
        {  lat: 22.5726, lng:88.3639 },
        { lat: 21.146633, lng: 79.088860 },
        
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#1260CC",
        // strokeOpacity: 1.0,
        strokeWeight: 4,
      });
     flightPath.setMap(this.map);
    
      const addMarkerInfo = () => {
        for (var i = 0; i < markersOnMap.length; i++) {
          // var InfoObj = [];
          var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>'

          const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: this.map,
            draggable:true,
            
          });
          const infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker.addListener('click', () => {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InfoObj[0] = infowindow;
          })
        }
      }
      addMarkerInfo();

      function closeOtherInfo() {
        if (InfoObj.length > 0) {
          InfoObj[0].set("marker", null);
          InfoObj[0].close();
          InfoObj[0].length = 0;
        }
      }
    })
   
     
      
  

}
}
