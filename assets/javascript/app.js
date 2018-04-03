

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

        types: ['restaurant']
    };
    infowindow = new google.maps.InfoWindow();

    // Create a service to search for Orlando Restaurant

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    // Create event listener to be search from any location
    google.maps.event.addListener(map, 'rightclick', function(event){
        map.setCenter(event.latLng)
        clearResults(markers)

        // Calls nearby search
        var request = {
            location: event.latLng,
            radius: 8047,

            types: ['restaurant']

         
        };
        service.nearbySearch(request, callback);
    })
}

// Call back function to make sure get right results
function callback(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK){
        for (var i = 0; i < results.length; i++){
            markers.push(createMarker(results[i]));
        }
    }
}

// Function to create marker of the results
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
    return marker;
}

// Function to clear off the markers on the map 
function clearResults(markers) {
    for (var m in markers) {
        markers[m].setMap(null)
    }
    markers = []
}

google.maps.event.addDomListener(window, 'load', initialize);