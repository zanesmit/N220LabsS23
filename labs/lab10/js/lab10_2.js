//Lab 10.1 Color Mixer
//Zane Smith
//April 13, 2023
//NewM-N220


//INSTRUCTIONS: 
//This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, 
//the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, 
//pressing +red buttons will change the div to a purple color.

//9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
//1 div that will change colors to the rgb color calculated

//1 div that shows the current calculated rgb color

//You must use attributes on the buttons for the values to change the colors by.

/*Algo:
    1.)Create the div to display the color
        ->Change the style of it(width, height, color)
        ->
    2.)Create a div to display the current color
    3.) create buttons
            -> each button needs a data-color & data-Val
    4.) create a loop to add event listeners to all buttons
    5.)create global variables to store values of color
    6.)create the function for the event listenter
            ->needs to get the current rgb values and add to them
            ->needs to update the displayed colorDiv & the rgb number
   
*/

//refrence to html elemnts
let colorDiv = document.getElementById("colorDiv");
let rgbDiv = document.getElementById("rgbNumber");

//global var to 
let redVal= 0;
let blueVal = 0;
let greenVal = 0;

//style the div that displays the color
colorDiv.style.backgroundColor = "black";   //style
colorDiv.style.height = 200 + "px";
colorDiv.style.width = 1000 + "px";



//get refrence to each buttons and addevent listener
var buttons = document.getElementsByTagName("button");
for(let i = 0; i<buttons.length; i++){
    addEventListener("click", addColor);
}

function addColor(event){
    //get attriubutes from buttons
    let color = event.target.getAttribute("data-color");
    let number =Number( event.target.getAttribute("data-val"));
    //add to rgb values based on button clicked
    if(color == "red"){
       redVal += number;
    }
    if(color == "green"){
        greenVal += number;
     }
     if(color == "blue"){
        blueVal += number;
     }
     
     
     //update rgb Number div
     rgbDiv.innerHTML = `CURRENT COLOR: RGB (${redVal}, ${greenVal}, ${blueVal})`;
     //update colorDiv color
     colorDiv.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;   //style


     
}
