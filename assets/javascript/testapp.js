    $("button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    

    $.ajax({
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=601&entity_type=city&count=30&sort=rating&order=desc&apikey=7c7844a8b5c9183b9520d3d76a131149",
        method: "GET"
    })
    .then(function(response) {
        // Storing an array of results in the results variable
        console.log(response)
        var results = response.data;
         // Looping through each result item
         for (var i = 0; i < results.length; i++) {

            // storing a div tag
            var restaurantDiv = $("#restaurants");

            // Creating a paragraph tag with the results
            var p = $("<p>").text(results[i]);

            

            // Appending the paragraph tag to the restaurantDiv
            resturantDiv.append(p);
            
    
    
    
    
    
         }
        
        })})
