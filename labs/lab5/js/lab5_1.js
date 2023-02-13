//Lab 5.1 Peak Pixels
//Zane Smith
//Febuary 13, 2023
//NewM-N220


//INSTRUCTIONS:
//Write the markup and JS to place a square div on the page. 100px by 100px, green background.
//Make it so that when the div its clicked, it increases its size by 10% every time.

    //Hints:
//Make a variable to store the height and with of the object
//to set the height and width, set to varName + "px"
//10% is .1 bigger,or 1.1 * the original size


 




/*Algo:
    1.) add a div to html file
            -> give it a unique id
    2.)use document.getElementById to get that element and save as a variable
    3.) style the div height and width///make vairbale to store values
    4.) set the color
    5.)add an event listener for the div onclick
    6.) change height and width
    7.)restyle
*/


let width = 100;
let height = 100;

let square = document.getElementById("square");

square.style.width = width + "px";
square.style.height = height + "px";
square.style.backgroundColor = "green";

square.addEventListener("click", onClick);

function onClick() {
    width *= 1.1;
    height *= 1.1;
    square.style.width = width + "px";
    square.style.height = height + "px";
  }
