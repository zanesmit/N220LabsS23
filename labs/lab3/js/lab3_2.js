//lab3.2 Red Remover
//Zane Smith
//January 30, 2023
//NewM-N220


//INSTRUCTIONS:
//Write a function that
//takes a color as an argument ( you can use color(170, 200, 150) )
//sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
//Returns that new color without red
//Then, test this function by drawing a circle to the screen using the result. You might have something like:
//let noRed = removeRed( color(170, 200, 150) );

//fill(noRed);

//draw circle



/*Algo:
    1.) write a function// make it take a color as an argument
    2.) in the function,, set the red value of that color to 0 using colorVariableArgumentName.setRed(0)
    3.) use a return statment to get color values;
    4.) create a variable that uses is = to the value of whatever is returned
    5.) fill(returned value variable)
    6.) draw circle(should be filled the color of whatever is the color passed is with red set to zero)
*/

function setup(){
    createCanvas(1200, 600);
    background(0);
}


function draw(){
    let c = color(170, 200, 150);           //create a variable to hold a color

    //let noRed = removeRed(c);                           //run the function to remove the red
    //fill(noRed);            //fill with the new color



    removeRed(c);                           //run the function to remove the red
    fill(c);            //fill with the new color
    circle(600, 300, 200);      //draw circle(should be filled with color without red value)
   

}



function removeRed(colors){
    return colors.setRed(0); //sets red value of whatever color is passed into it

         
}