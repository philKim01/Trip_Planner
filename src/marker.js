// export const newHotel = () => {
//   const hotelMarker = document.createElement("div");
//   hotelMarker.style.width = "32px";
//   hotelMarker.style.height = "39px";
//   hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

// }

// export const newRestaurant = () =>{
//   const restaurantMarker = document.createElement("div");
//   restaurantMarker.style.width = "32px";
//   restaurantMarker.style.height = "39px";
//   restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

// }

// export const newActivity = () => {
//   const activityMarker = document.createElement("div");
//   activityMarker.style.width = "32px";
//   activityMarker.style.height = "39px";
//   activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// }

import mapboxgl from "mapbox-gl";
import {map} from "./index"

const iconURLs = {
    hotel: "url(http://i.imgur.com/D9574Cu.png)",
    restaurant: "url(http://i.imgur.com/cqR6pUI.png)",
    activity: "url(http://i.imgur.com/WbMOfMl.png)"
};

export const buildMarker = function(type, coords) {
    console.log("buildMarker was called");
    const marker = document.createElement("div");
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = iconURLs[type];

   new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
};



