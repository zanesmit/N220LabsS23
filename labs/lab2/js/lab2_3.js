//lab2.3 World Wrap
//Zane Smith
//January 23, 2023
//NewM-N220

//INSTRUCTIONS:
//Create a canvas 800px x 600 px.
//Make an application that starts drawing a ball on the left hand of the screen - make it move to the right 5 pixels per frame.
//Write the code so that when the circle reaches 800 pixels to the right, move the circle to the far left of the screen.


/*Algo:
    1.) Create canvas in setup function based on instuctions
    2.) create a global variable "x" for the x valu and set it at 0(it will be increased in the draw function)
    3.) Create a circle in the draw function(on the left side of the screen//its location will be dependend on x variable)
    4.) in the draw function add 5
    5.) add an if statment tso the ball will go back to the starting position
        -if( x == 800) then reset x back to 0
        
*/


var x = 0;        //global variable to use in if statement 


function setup(){
    createCanvas(800, 600);     //create canvas to specfied size
    
}

function draw(){
    background(44,248,193);     //change background color
    fill(0);                    //change ball color
    circle(x, 300, 20);         //draws a circle at (variable x, middle of screen) with radius of 20

    x += 5;             //add 5 to x
    if(x == 800){          //if x location is == to 200,
        x= 0;        //reset x back to zero
    }
    
}