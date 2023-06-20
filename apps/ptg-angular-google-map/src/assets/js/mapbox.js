
function mapbox(){
    mapboxgl.accessToken = 'pk.eyJ1IjoieW9naXRhd2FzbmlrIiwiYSI6ImNsNXRoYW91ZDA1cXMzamxhZGw2ZTZqY3MifQ.qv_6ni2UJOUVNHqwYyClXQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-79.4512, 43.6568],
zoom: 13
});
map.addControl(new mapboxgl.FullscreenControl(),'top-left');
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
    
    }),
    'top-left'
    );
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-right'
);
const marker = new mapboxgl.Marker({
    // color: '#F84C4C', // color it red
    iconUrl: 'assets/taxi.png',
    iconSize: [50, 50]
    });
     
    // Define the animation.
    function animateMarker(timestamp) {
    const radius = 20;
     
    /* 
    Update the data to a new position 
    based on the animation timestamp. 
    The divisor in the expression `timestamp / 1000` 
    controls the animation speed.
    */
    marker.setLngLat([
    Math.cos(timestamp / 1000) * radius,
    Math.sin(timestamp / 1000) * radius
    ]);
     
    /* 
    Ensure the marker is added to the map. 
    This is safe to call if it's already added.
    */
    marker.addTo(map);
     
    // Request the next frame of the animation.
    requestAnimationFrame(animateMarker);
    }
     
    // Start the animation.
    requestAnimationFrame(animateMarker);
    
  }