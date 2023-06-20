import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

import 'leaflet.markercluster';

@Component({
  selector: 'ptg-ui-control-map-outside',
  templateUrl: './control-map-outside.component.html',
  styleUrls: ['./control-map-outside.component.css']
})
export class ControlMapOutsideComponent implements OnInit {

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
    this.cd.detectChanges();
    const zoom = 17;
    let generateMenu=(id:any, title:any)=> {
      let city:any = document.querySelector(".city")
       const hrefElement = `<a id="${id}" title="${title} MARKER-ID:${id}" class="marker-click p-2  marker-position" href="#" style="color:red ;text-decoration:none">${title}</a>`;
       city.insertAdjacentHTML("beforeend", hrefElement);
     }
     
     // function get layer id
     let markerOpen=(id:any)=> {
       this.map.eachLayer( (layer:any) =>{
         if (layer.options) {
           if (layer._leaflet_id === id) {
             centerMarker(layer);
           }
         }
       });
     }
     let centerMarker=(layer:any)=> {
       layer.openPopup();
       this.map.panTo(L.latLng(layer.getLatLng()));
     }
     
     // center on marker when click
     let centerOnMarker=(e:any)=> {
       const el = e.target._leaflet_id;
     
       const element = document.getElementById(el);
       // remove active menu
       removeActiveMenu(element);
     
       // find element in array
       const indexActivePopup = points.findIndex((x, index) => index === el);
     
       // active pre/next menu
       activeControls(indexActivePopup);
     
       this.map.setView(e.target.getLatLng(), zoom);
     }
    const points = [
      {
        lat: 18.556919, 
        lng: 73.926103,
        title: "Ganesh Nagar",
        image: "https://grzegorztomicki.pl/images/lwow/576/IMG_0202.jpg",
      },
      {
        lat: 18.5913, 
        lng: 73.7389,
        title: "Shivaji Nagar",
        image: "https://grzegorztomicki.pl/images/chiny/576/IMG_8413.jpg",
      },
      {
        lat:18.5626, 
        lng: 73.8524,
        title: "Khadki",
        image: "https://grzegorztomicki.pl/images/maroko/576/IMG_0738.jpg",
      },
      {
        lat: 18.5987, 
        lng:73.7978 ,
        title: "Pimple Saudagar",
        image: "https://grzegorztomicki.pl/images/izrael/576/IMG_2071.jpg",
      },
    ];
    for (let i = 0; i < points.length; i++) {
      let { lat, lng, title, image } = points[i];
    
      // create specific icon
      let myIcon :any= L.icon({
        iconUrl: image,
        className: "image-icon",
        iconSize: [100, 60],
        iconAnchor: [50, 50],
        popupAnchor: [0, -40],
      });
      let marker:any = L.marker([lat, lng], { icon: myIcon }).addTo(this.map);

     let idMarker:any = marker._leaflet_id;
    
      // add to marker popup
      marker.bindPopup(`
          <div style="text-align: center;">
            <div style="text-transform: uppercase; font-weight: bold;">${title} id: ${idMarker}<div>
          </div>
        `);
    
      // click on marker center marker on map
      marker.on("click", centerOnMarker);
    
      // generate bottom menu with markers
      generateMenu(idMarker, title);
    }
   
    let activeControls=(index:any)=> {
      next.classList.add("disabled");
      prev.classList.remove("disabled");
    
      if (index > 0 && index < countMarker) {
        next.classList.remove("disabled");
        prev.classList.remove("disabled");
      } else if (index === 0) {
        prev.classList.add("disabled");
        next.classList.remove("disabled");
      }
    }
    let removeActiveMenu=(el:any) =>{
      const active = document.querySelector(".active") as HTMLMapElement
    
      if (active) {
        active.classList.remove("active");
      }
      el.classList.add("active");
    }
    
    let markersDiv:any = document.querySelectorAll(".marker-click");
    let buttonControls:any = document.querySelectorAll(".button-controls");
    let prev:any = document.querySelector(".prev");
    let next:any = document.querySelector(".next");
   let countMarker:any = markersDiv.length - 1;

   markersDiv.forEach((marker:any, index:any) => {
    marker.addEventListener("click", (e:any) => {
      e.preventDefault();
  
      // remove active menu
      removeActiveMenu(e.target);
  
      // active pre/next menu
      activeControls(index);
  
      // the click event transfers to the function
      // id = title of the marker
      markerOpen(Number(e.target.id));
    });
  });
  
  // click on prev, next
  buttonControls.forEach((button:any) => {
    button.addEventListener("click", (e:any) => {
      e.preventDefault();
  
      const btn = e.target.classList[1];
  
      let index = Array.from(markersDiv).findIndex((x:any) =>
        x.classList.contains("active")
      );
  
      index = btn === "prev" ? index - 1 : index + 1;
  
      let element:any = Array.from(markersDiv)[index];
      removeActiveMenu(element);
  
      // open specific marker
      markerOpen(Number(element.id));
  
      // active pre/next menu
      activeControls(index);
    });
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
