import { Component, OnInit } from '@angular/core';
import { styles } from '../../../mapstyle'; 
import { Loader } from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-custom-markers',
  templateUrl: './custom-markers.component.html',
  styleUrls: ['./custom-markers.component.css']
})
export class CustomMarkersComponent implements OnInit{

  private map: google.maps.Map | undefined;

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
          placeName: 'Phoenix Marketcity',
          LatLng: [{
            lat: 26.9124,
            lng: 75.7873
          }],
          type: 'clothing'
        },
        {
          placeName: 'PVR Cinemas',
          LatLng: [{
            lat: 19.0760,
            lng: 72.8777
          }],
          type: 'cinemas'
        },
        {
          placeName: 'The Galleria Mall',
          LatLng: [{
            lat: 22.7196,
            lng: 75.8577
          }],
          type: 'clothing'
        },
        {
          placeName: 'Karavalli Restaurant',
          LatLng: [{
            lat: 18.5314,
            lng: 73.8446
          }],
          type: 'restaurants'
        },
        {
          placeName: 'VGreen Garden',
          LatLng: [{
            lat: 22.2685539,
            lng: 73.0506738
          }],
          type: 'garden'
        },
        {
          placeName: 'EDEN HUTS RESTAURANT ',
          LatLng: [{
            lat: 28.3838258,
            lng: 81.885467
          }],
          type: 'restaurants'
        },
        {
          placeName: 'Topiary Garden - Lalbagh',
          LatLng: [{
            lat: 12.954517,
            lng: 77.3507315
          }],
          type: 'garden'
        },
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
  // })

  }


  
  
}
