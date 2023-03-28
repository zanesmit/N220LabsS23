//Lab 8.2 Make Random
//Zane Smith
//March 29, 2023
//NewM-N220


//INSTRUCTIONS: Create a function that generates and returns a random whole number between 0 and 10. 
//Write a web page to test it by having a button that, when clicked runs a function that: 
    //- Uses that function to generate a random number. - Displays that number on the screen. 
    //Your final application should have two functions - one to make the random number, and one to handle the click.
 




/*Algo:
    1.) create a function that creates a random number
    2.) create a button on html page
        -> when button is clicked, random number generator function is called
        ->onclick function outputs to page
*/
 
let number = document.getElementById("number");
 



function doStuff(){

    let rando = getRandom();        //get random number from random generation function,

    document.getElementById("result").innerHTML = rando;//add number to the page
  
  
}

function getRandom(){
    return Math.floor(Math.random() * 11); 
}


