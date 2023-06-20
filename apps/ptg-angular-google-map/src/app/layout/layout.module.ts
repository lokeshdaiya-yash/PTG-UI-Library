import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component'; 


import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { commonModule } from '../common/common.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import{ MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from "@angular/material/divider";
import { AppRoutingModule } from '../app-routing.module';
import { LocationTrackerComponent } from '../Components/LeafletComponents/location-tracker/location-tracker.component';
import { PolylineComponent } from '../Components/GoogleMap-Components/polyline/polyline.component'; 
import { RoutePolylineComponent } from '../Components/LeafletComponents/route-polyline/route-polyline.component';
import { CustomMarkersComponent } from '../Components/GoogleMap-Components/custom-markers/custom-markers.component'; 
import { GeojsonComponent } from '../Components/LeafletComponents/geojson/geojson.component'; 
import { TileLayerComponent } from '../Components/LeafletComponents/tile-layer/tile-layer.component'; 
import { SearchEngineComponent } from '../Components/LeafletComponents/search-engine/search-engine.component'; 
import { MarkerClusterComponent } from '../Components/LeafletComponents/marker-cluster/marker-cluster.component'; 
import { AddMoveDeleteMarkerComponent } from '../Components/LeafletComponents/add-move-delete-marker/add-move-delete-marker.component'; 
import { ControlMapOutsideComponent } from '../Components/LeafletComponents/control-map-outside/control-map-outside/control-map-outside.component';
import { MarkerClustersComponent } from '../Components/GoogleMap-Components/marker-cluster/marker-cluster.component';
import { GeocodingComponent } from '../Components/GoogleMap-Components/geocoding/geocoding.component'; 
import { DirectionComponent } from '../Components/GoogleMap-Components/direction/direction.component';
import { ControlMapOutsideGoogleComponent } from '../Components/GoogleMap-Components/control-map-outside/control-map-outside.component';
import { CountMarkersComponent } from '../Components/LeafletComponents/count-markers/count-markers.component';
import { TabsOnPopupComponent } from '../Components/LeafletComponents/tabs-on-popup/tabs-on-popup.component';
import { LeafletCustomMarkerComponent } from '../Components/LeafletComponents/leaflet-custom-marker/leaflet-custom-marker.component';
import { UpdatedLiveLocationComponent } from '../Components/LeafletComponents/updated-live-location/updated-live-location.component';
import { GreatCircleComponent } from '../Components/LeafletComponents/great-circle/great-circle.component';
@NgModule({
    declarations: [
   LayoutComponent,
   LocationTrackerComponent,
   PolylineComponent,
   RoutePolylineComponent,
   CustomMarkersComponent,
   GeojsonComponent,
   GreatCircleComponent ,
   TileLayerComponent,
   SearchEngineComponent,
   MarkerClusterComponent,
   AddMoveDeleteMarkerComponent,
   ControlMapOutsideComponent,
   MarkerClustersComponent ,
   GeocodingComponent,
   DirectionComponent ,
   ControlMapOutsideGoogleComponent,
   CountMarkersComponent,
   TabsOnPopupComponent,
   LeafletCustomMarkerComponent,
   UpdatedLiveLocationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        commonModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatDividerModule,
        AppRoutingModule 
    ]
})

export class LayoutModule{}