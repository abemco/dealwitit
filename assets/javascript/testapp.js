    $("button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    

    $.ajax({
        url: "https://developers.zomato.com/api/v2.1/search?ent   ity_id=601&entity_type=city&count=30&sort=rating&order=asc&apikey=7c7844a8b5c9183b9520d3d76a131149",
        method: "GET"
    })
    .then(function(response) {
        // Storing an array of results in the results variable
        console.log(response)
        var results = response.data;})})
