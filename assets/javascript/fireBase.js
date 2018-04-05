/*firebase for restaurant finder*/

 /*Initialize Firebase*/
var config = {
    apiKey: "AIzaSyBWx1PWZj9KzoIZv9CPZlDXKztDJLnLRA0",
    authDomain: "dealwitit-d1cc8.firebaseapp.com",
    databaseURL: "https://dealwitit-d1cc8.firebaseio.com",
    projectId: "dealwitit-d1cc8",
    storageBucket: "dealwitit-d1cc8.appspot.com",
    messagingSenderId: "521773465860"
  };

  firebase.initializeApp(config);

  var foodData = firebase.database();

  // 2. Populate Firebase Database with initial data (in this case, I did this via Firebase GUI)

// 3. Button for adding data
$("#submitButton").on("click", function(){

	// Grabs user input
	var firstName = $("#first_name").val().trim();
	var lastName = $("#last_name").val().trim();
    var email = $("#email").val().trim(); 
    
  
    
// Creates local "temporary" object for holding data
var newContact = {
    firstName:  firstName,
    lastName: lastName,
    email: email,
}

// Uploads data to the database
foodData.ref().push(newContact);


// Clears all of the text-boxes
$("#first_name").val("");
$("#last_name").val("");
$("#email").val("");


return false;
});