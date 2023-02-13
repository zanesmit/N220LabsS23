//Lab 5.3 Over and Out
//Zane Smith
//Febuary 13, 2023
//NewM-N220


//INSTRUCTIONS:
//Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. 
//Using onmouseover and onmouseout (instead of "onclick"), 
//change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.




 




/*Algo:
    1.) add a div to the html
        -> give unique id to use to style
    2.) stlye size to 100px x 100px
    3.) style to color blue 
    4.) add event listerner for onmouseover
        -> create an over function that changes div color to black
    4.) add event listerner for onmouseout
        -> create an over function that changes div color back to blue
*/

let div = document.getElementById("thisDiv");

div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "blue";


div.onmouseover = function(){
    div.style.backgroundColor = "black";
}
div.onmouseout = function(){
    div.style.backgroundColor = "blue";
}