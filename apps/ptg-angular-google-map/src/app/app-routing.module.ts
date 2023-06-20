import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LocationTrackerComponent } from './Components/LeafletComponents/location-tracker/location-tracker.component'; 
import { GooglemapComponent } from './modules/googlemap/googlemap.component';
import { LeafletComponent } from './modules/leaflet/leaflet.component';
import { PolylineComponent } from './Components/GoogleMap-Components/polyline/polyline.component';
import { RoutePolylineComponent } from './Components/LeafletComponents/route-polyline/route-polyline.component';
import { CustomMarkersComponent } from './Components/GoogleMap-Components/custom-markers/custom-markers.component'; 
import { GeojsonComponent } from './Components/LeafletComponents/geojson/geojson.component';
import { SearchEngineComponent } from './Components/LeafletComponents/search-engine/search-engine.component';
import { TileLayerComponent } from './Components/LeafletComponents/tile-layer/tile-layer.component';
import { MarkerClusterComponent } from './Components/LeafletComponents/marker-cluster/marker-cluster.component';
import { AddMoveDeleteMarkerComponent } from './Components/LeafletComponents/add-move-delete-marker/add-move-delete-marker.component';
import { ControlMapOutsideComponent } from './Components/LeafletComponents/control-map-outside/control-map-outside/control-map-outside.component';
import { GreatCircleComponent } from './Components/LeafletComponents/great-circle/great-circle.component';
import { MarkerClustersComponent } from './Components/GoogleMap-Components/marker-cluster/marker-cluster.component';
import { GeocodingComponent } from './Components/GoogleMap-Components/geocoding/geocoding.component';
import { DirectionComponent } from './Components/GoogleMap-Components/direction/direction.component';
import { ControlMapOutsideGoogleComponent } from './Components/GoogleMap-Components/control-map-outside/control-map-outside.component';
import { CountMarkersComponent } from './Components/LeafletComponents/count-markers/count-markers.component';
import { TabsOnPopupComponent } from './Components/LeafletComponents/tabs-on-popup/tabs-on-popup.component';
import { LeafletCustomMarkerComponent } from './Components/LeafletComponents/leaflet-custom-marker/leaflet-custom-marker.component';
import { UpdatedLiveLocationComponent } from './Components/LeafletComponents/updated-live-location/updated-live-location.component';
import { MapboxComponent } from './modules/mapbox/mapbox.component';

const routes: Routes = [{
  path:'',
  component: LayoutComponent,
  children: [{
    path:'',
  component: GooglemapComponent
  },
  {
    path:'leaflet',
  component: LeafletComponent
  },
  {
    path:'mapbox',
  component: MapboxComponent
  },
  {
    path:'locationtracker',
  component: LocationTrackerComponent
  },
  {
    path:'polyline',
  component: PolylineComponent
  },
  {
    path:'routepolyline',
    component:RoutePolylineComponent
  },
  {
    path:'custommarkers',
    component:CustomMarkersComponent
  },
  {
    path:'tabsonpopup',
    component:TabsOnPopupComponent
  },
  {
    path:'geojson',
    component:GeojsonComponent
  },
  {
    path:'leafletcustommarker',
    component:LeafletCustomMarkerComponent
  },
  {
    path:'searchengine',
    component:SearchEngineComponent
  },
  {
    path:'tilelayer',
    component:TileLayerComponent
  },
  {
    path:'markercluster',
    component:MarkerClusterComponent
  },
  {
    path:'addmovedeletemarker',
    component:AddMoveDeleteMarkerComponent
  },
  {path:'controlmap',
  component:ControlMapOutsideComponent

  },
  {path:'greatcircle',
  component:GreatCircleComponent

  },
  {
path:'googlemapmarkercluster',
component:MarkerClustersComponent
  },
  {
    path:'geocoding',
    component:GeocodingComponent
      },
      {
        path:'direction',
        component:DirectionComponent
          },
          {
            path:'controlgooglemap',
            component:ControlMapOutsideGoogleComponent
              },
              {
                path:'countmarkers',
                component:CountMarkersComponent
                  },
                  {
                    path:'updatedlivelocation',
                    component:UpdatedLiveLocationComponent
                      },

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
