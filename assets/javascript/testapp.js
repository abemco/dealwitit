    $("#recommendationbtn").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    

    $.ajax({
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=601&entity_type=city&count=20&lat=28.443237&lon=-81.469780&radius=8047&sort=rating&order=desc&apikey=7c7844a8b5c9183b9520d3d76a131149",
        method: "GET"
    })
    .then(function(response) {
        // Storing an array of results in the results variable
        console.log(response)
    
        // Looping through each result item
        var restaurantDiv = $("#restaurants");

        for (var i = 0; i < response.restaurants.length; i++) {
            var restaurant = response.restaurants[i].restaurant.name;
            var address = response.restaurants[i].restaurant.location.address;
            var rating = response.restaurants[i].restaurant.user_rating.aggregate_rating;
            var price = response.restaurants[i].restaurant.price_range;
            var menu = response.restaurants[i].restaurant.menu_url
            var url = response.restaurants[i].restaurant.url;
            var urlImage = "assets/images/top-rated.jpg"
            var image = urlImage;
            var width = 150;
            var height = 150;
            var style = "display: block;";
            var right = "float: right;";
            // Creating a paragraph tag with the results
            var p = $("<h5>").text(restaurant);
            var a = $("<p>").text("Address: "+address);
            var r = $("<p>").text("Rating: "+rating);
            var pr = $("<p>").text("Price Range: "+price);
            var m = $("<a>").text("Menu").attr('href', menu).attr('target', '_blank');
            var url = $("<br><a></br>").text("More Info").attr('href', url).attr('target', '_blank');
            var img = $("<img>").attr('src',image).attr('width',width).attr('height',height).attr('style',style).attr('style',right);
            
            

            // Appending the paragraph tag to the restaurantDiv
            restaurantDiv.append('<hr>', p, a, r, pr, m, url, img, '<hr>');
         }
       

        })})
