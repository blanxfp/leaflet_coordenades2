var mymap = L.map('mapid').setView([41.386943, 2.170036], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmxhYW54IiwiYSI6ImNrYmdhMnBhNDEzZzYycnM3dGo1b3VvYmkifQ.3y2Q8T7j3DmMnjfA1oclXQ'
}).addTo(mymap);

var popup = L.popup();
// var marker = L.marker();
var marker = L.marker([41.386943, 2.170036]).addTo(mymap);


function onMapClick(e) {
    marker.setLatLng(e.latlng);
    marker.bindPopup("You clicked the map at " + e.latlng.toString()).openPopup();
    mymap.setView(e.latlng, 17);
}

mymap.on('click', onMapClick);