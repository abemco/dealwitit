/*
logic for Dealwitit
*/
// Google Maps API to display on the page
var map;
var infoWindow;
var request;
var service;
var markers = [];
    function initialize() {
    var center = new google.maps.LatLng(28.443237, -81.469780);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
        });
    
    // Informing maps how far search (radius) and what to display
    request = {
        location: center,
        radius: 8047,
        types: ['car_rental']
    };
    infowindow = new google.maps.InfoWindow();