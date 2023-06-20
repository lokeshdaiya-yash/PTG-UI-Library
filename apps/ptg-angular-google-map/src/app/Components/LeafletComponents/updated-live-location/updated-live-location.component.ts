import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';

@Component({
  selector: 'ptg-ui-updated-live-location',
  templateUrl: './updated-live-location.component.html',
  styleUrls: ['./updated-live-location.component.css']
})
export class UpdatedLiveLocationComponent implements OnInit {

  private map!: L.Map;
  private provider = new OpenStreetMapProvider();
  private centroid: L.LatLngExpression = [18.551451, 73.934784];
  private startPoint: Array<number>=[];
  private endPoint: Array<number>=[];
 public searchRouteControl: null | undefined;

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
       var taxiIcon = L.icon({
        iconUrl: 'assets/taxi.png',
        iconSize: [50, 50]
      })
      let location:any =position as L.LatLngExpression;
      var marker = L.marker(location, { icon: taxiIcon }).addTo(this.map);
  
      this.map.on('click',  (e) =>{
        console.log(e)
        var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
        L.Routing.control({
          waypoints: [
            L.latLng(location),
            L.latLng(e.latlng.lat, e.latlng.lng)
          ]
        }).on('routesfound', function (e) {
          var routes = e.routes;
          console.log(routes);
  
          e.routes[0].coordinates.forEach((coord:any, index:any) =>{
            setTimeout(function () {
              marker.setLatLng([coord.lat, coord.lng]);
            }, 100 * index)
          })
  
        }).addTo(this.map);
      });
//       let searchControl:any = GeoSearchControl({
//         provider : new OpenStreetMapProvider(),
//         autoComplete :true,
//         searchLabel : 'Search Location',
//         position:'topright',
//         // marker: {icon:new L.Icon.Default(), draggable:false},
//           style :'bar',
          
//       })
//       this.map.addControl(searchControl);

//        var taxiIcon = L.icon({
//         iconUrl: 'assets/taxi.png',
//         iconSize: [50, 50]
//       })
//       let location:any =position as L.LatLngExpression;
//       var marker = L.marker(location, { icon: taxiIcon }).addTo(this.map);

// searchControl.onSubmit=(e:any) =>{
//         console.log(e)
//         let endPoint:any=[e.data.x,e.data.y];
//         console.log(endPoint)
//       //  L.marker(endPoint).addTo(this.map);

    
//         L.Routing.control({
//           waypoints: [
//             L.latLng(location),
//             L.latLng(e.data.x,e.data.y)
//           ]
//         }).on('routesfound', function (e) {
//           var routes = e.routes;
//           console.log(routes);

//           e.routes[0].coordinates.forEach((coord:any, index:any) =>{
//             setTimeout(function () {
//               marker.setLatLng([coord.lat, coord.lng]);
//             }, 100 * index)
//           })

//         }).addTo(this.map);
      
//     }
   
       
   
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
    
    // throw new Error('Method not implemented.');



  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
  }

}
