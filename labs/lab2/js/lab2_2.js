//lab2.2 Puck side
//Zane Smith
//January 23, 2023
//NewM-N220

//INSTRUCTIONS:
//Canvas size: 400x300. Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). 
//When the mouse is on the right half of the canvas, draw the circle in red. 
//When the mouse is on the left side of the canvas, draw the circle in blue.


/*Algo:
    1.) Create canvas in setup function 
    2.) draw circle where mosuse is using mouseX, MouseY
    3.) fill circle red
    4.) use if statement
        -if mouseX is at the x poistion  less than or == to 200, fill blue
        
*/


let left_side = 200;        //global variable to use in if statement 


function setup(){
    createCanvas(400, 300);     //create canvas to specfied size
}

function draw(){
    background(25);        //change background to white
    circle(mouseX, mouseY, 20);         //draws a circle at mouse location with radius of 20
    fill(255, 0, 0);            //mouse circle will start as red, unless on left side of screen

    if(mouseX <= left_side){          //if mouseX is on left side of screen,
        fill(0, 0, 255);        //fill blue
    }

}