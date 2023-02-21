//Lab 6.4 Favorray
//Zane Smith
//Febuary 23, 2023
//NewM-N220


//INSTRUCTIONS:
//Create a string array. List at least five of your favorite things in that array.

//Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing. 
//For instance, one line in the div might say, "Pizza, is one of my favorite things."
 

/*Algo:
    1.)create array of fav things 
    2.) create div in html
    3.) loop throught each array element to write favThings[i] + " is one of my favorit things "

*/
//refernce to div element 
let myDiv = document.getElementById("myDiv");
//aray of fav things
let favThings = ["pizza", "movies", "sleeping", "music", "basketball"];


// Loop through the array, writing each favorite thing to the div with a descriptive string
for (let i = 0; i < favThings.length; i++) {
    myDiv.innerHTML += favThings[i] + ", is one of my favorite things.<br>";
  }