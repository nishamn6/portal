import React from "react";
import {useState} from "react";

const API_KEY = "0aa0055c7b21c949c477d2b768de3e90"

function addMarkersToMap(map) {
 const [lat,setLat]=useState(coord?.lat);
  const [lon,setLon]=useState(coord?.lon);
  const [coord,setCoord]=useState();
  

  var mapMarker = new H.map.Marker({lat:{setLat}, lng:{setLon}});
  map.addObject(mapMarker);

 // var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
 // map.addObject(romeMarker);

  // var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
  // map.addObject(berlinMarker);

  // var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
  // map.addObject(madridMarker);

  // var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
  // map.addObject(londonMarker);
}

/**
* Boilerplate map initialization code starts below:
*/

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
apikey: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
defaultLayers.vector.normal.map,{
center: {lat:50, lng:5},
zoom: 4,
pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
addMarkersToMap(map);
}


              
// import React, { useRef, useEffect, useState } from 'react';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';
// import './Map.css';

// export default function Map(){
  
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng] = useState(50);
//   const [lat] = useState(50);
//   const [zoom] = useState(14);
//   const [API_KEY] = useState("fJfqcp8c0D70x8A5zTME");

//   useEffect(() => {
//     if (map.current) return; //stops map from intializing more than once
//     map.current = new maplibregl.Map({
//       container: mapContainer.current,
//       style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
//       center: [lng, lat],
//       zoom: zoom
//     });
//     map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
//     new maplibregl.Marker({color: "#FF0000"})
//       .setLngLat([139.7525,35.6846])
//       .addTo(map.current);
//   });

//   return (
//     <div className="map-wrap">
//       <div ref={mapContainer} className="map" />
//     </div>
//   );
// }