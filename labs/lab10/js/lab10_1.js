//Lab 10.1 Color Changer
//Zane Smith
//April 13, 2023
//NewM-N220


//INSTRUCTIONS: 
//Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. 
        //Give them a margin of 5px.

//Using only one event handler, write event listeners to respond to a click on each element. 
//Each element should change to a different color: one red, one green, and one blue. 
//Use a data attribute on the elements to store the color to be changed to.


/*Algo:
    1.)Create 3 divs
            -> create a function to edit the length, width, margin,  color, 
    2.)write event handler that runs when element is clicked
        -> to make it work, Add the data attributes to the elements in the html
        ->grab the data from the div, and set its background color
  
*/



let result = document.getElementById("result"); 
let div1 = document.getElementById("div1");   
let div2 = document.getElementById("div2");   
let div3 = document.getElementById("div3");   


editDiv(div1);
editDiv(div2);
editDiv(div3);







function editDiv(div){  
    //style each the divs
    div.style.backgroundColor = "gray";   //style
    div.style.height = 200 + "px";
    div.style.width = 200 + "px";
    div.style.margin = 5 + "px";
    div.style.float = "left";
    
    //add event listener to each div
    div.addEventListener("click", itsClicked);
}



function itsClicked(event){
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;   //change color of the div
}

