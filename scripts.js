// Javascript for TP7 
// Also working on tinkering with functions and adding more customization to the website. WORK IN PROGRESS

//function to load a file from the URL "fromfile" into the object identified by "whereto" 
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} 

	// initiate request and wait for response
	ajax.send();

}

// new recipe object constructor 

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.recipeName;
    document.querySelector("#titleBanner").style.backgroundimage = "frenchtoast.jpg" + this.imageURL; 
    loadFileInto(this.ingredients,"#ingredients ul");
    loadFileInto(this.equipment,"#equipment ul");
    loadFileInto(this.directions,"#directions ol");
  }
}

FrenchToast = new Recipe("French Toast", "Andrew Witsoe", "https://www.bing.com/images/blob?bcid=sy-KjsXVqeIE0kLrrGkXnjMcPlvX.....x0", "ingredients.html", "equipment.html", "directions.html");

LemonBars = new Recipe("Lemon Bars", "Coby Nelson", "", "LBingredients.html", "LBequipment.html", "LBdirections.html");

SugarCookies = new Recipe("Maple Brown Sugar Cookies", "Kailin Gilzow", "", "SCingredients.html", "SCequipment.html", "SCdirections.html");

window.onload = function() {
  
  document.querySelector("#first").onclick = function() {
    FrenchToast.displayRecipe();
  }
  document.querySelector("#second").onclick = function() {
    LemonBars.displayRecipe();
  }
  document.querySelector("#third").onclick = function() {
    SugarCookies.displayRecipe();
  }
}