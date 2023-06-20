import { styles } from '../../mapstyle';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';



@Component({
  selector: 'app-googlemap',

  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css'],
})
export class GooglemapComponent  {
  
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
      const bikeLayer = new google.maps.BicyclingLayer();

      bikeLayer.setMap(map);
  })
  }
 
  }

  