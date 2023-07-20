import { RouterLink } from '@angular/router';

export const navbarData = [
  {
    id: '1',
    RouterLink: 'Google Map',
    MapIcon: 'icon fa fa-map',
    label: 'Google Map',
    icon: 'expand_more',
    Options: [
      { id: '1', RouterLink: 'custommarkers', label: 'Custom Marker' },
      { id: '2', RouterLink: 'controlgooglemap', label: 'Control Map Outside' },
      { id: '3', RouterLink: 'polyline', label: 'Polyline' },
      { id: '4', RouterLink: 'googlemapmarkercluster', label: 'Marker Cluster' },
      { id: '5', RouterLink: 'geocoding', label: 'Geocoding' },
      { id: '6', RouterLink: 'direction', label: 'Direction' },
    ],
  },
  {
    id: '2',
    RouterLink: 'Leaflet',
    MapIcon: 'icon fa fa-leaf',
    icon: 'expand_more',
    label: 'Leaflet',
    Options: [
      { id: '1', RouterLink: 'addmovedeletemarker', label: 'Add Markers' },
      { id: '2', RouterLink: 'markercluster', label: 'Marker Cluster' },
      { id: '3', RouterLink: 'countmarkers', label: 'Count Markers' },
      { id: '4', RouterLink: 'locationtracker', label: 'Location Tracker' },
      { id: '5', RouterLink: 'routepolyline', label: 'Estimate Time' },
      { id: '6', RouterLink: 'updatedlivelocation', label: 'Moving Marker'},
      { id: '7', RouterLink: 'geojson', label: 'Geojson' },
      { id: '8', RouterLink: 'leafletcustommarker', label: 'Custom Marker' },
      { id: '9', RouterLink: 'searchengine', label: 'Search Engine' },
      { id: '10', RouterLink: 'tilelayer', label: 'Tile Layer' },
      { id: '11', RouterLink: 'tabsonpopup', label: 'Tabs in Popup' },
     
      { id: '12', RouterLink: 'greatcircle', label: 'Great Circle [turfjs]' },
      { id: '13', RouterLink: 'controlmap', label: 'Control Map Outside' },
      
      
    ],
  },
  {
    id: '3',
    RouterLink: 'mapbox',
    MapIcon: 'icon fa fa-map-location-dot',
    icon: 'expand_more',
    label: 'mapbox',
  }
];
