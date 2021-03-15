import mapboxgl from "mapbox-gl";
import {buildMarker} from './marker';


console.log("Hello");

mapboxgl.accessToken = 'pk.eyJ1IjoicGhpbGxpcGtpbTIyNCIsImEiOiJja21hcXl1d2gxdXVhMnVwYm9pMWdyb3pjIn0.4aWlIlYsPNooodiTTmpzPQ';

export const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// BELOW IS FOR FSA
const marker = document.createElement("div");
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);

// NEW MARKER TEST
buildMarker('hotel', [-75, 41]);

