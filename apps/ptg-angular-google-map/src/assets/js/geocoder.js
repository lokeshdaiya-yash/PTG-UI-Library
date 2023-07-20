// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
function geocoder(){
  // config map
  window.onload = function() {

    var map,
        routeLayer,
        dir;

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [40.732672, -74.271125],
        zoom: 11,
        attributionControl: true
    });

    dir = MQ.routing.directions();

    routeLayer = MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true,
        ribbonOptions: {
            draggable: false,
            ribbonDisplay: { color: '#5882FA', opacity: 0.7 },
            widths: [ 10, 15, 10, 15, 10, 13, 10, 12, 10, 11, 10, 11, 10, 12, 10, 14, 10 ]
        },

        altRibbonOptions: {
            show: true,
            ribbonDisplay: { color: '#F78181', opacity: 0.7},
            hoverDisplay: { color: 'red', opacity: 0.6 }
        }
    });

    dir.route({
        maxRoutes: 5,
        timeOverage: 25,
        locations: [
            'morris plains, nj',
            'staten island, ny'
        ]
    });

    map.addLayer(routeLayer);
  }
}