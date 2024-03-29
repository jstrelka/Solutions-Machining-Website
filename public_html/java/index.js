/*
Name: Justin Strelka
Website: Solutions Machining, Inc.
File: index.js
Creation Date: 6/10/18
Last Update: 7/21/18
*/

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(39.805546, -105.063570),
        zoom: 12,
        streetViewControl: false,
        fullscreenControl: false,
        panControl: false,
        draggable: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}
