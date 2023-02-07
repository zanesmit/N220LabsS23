//Lab 4.3 Bouncing Ball / World Wrap Refactor
//Zane Smith
//Febuary 7, 2023
//NewM-N220





//INSTRUCTIONS:
//Take your ball bounce or world wrap assignment and recode it using an object to store the ball's
// size, color, and velocity. No global variables or hardcoded values should be used in your update function.


/*Algo:
    1.) Create an object for the ball
        -> give properties for x position,  y postion, radius, velocity, & color
    2.) Rewrite code while only using values from the ball object 
*/


let ball = {
    x: 0,
    y: 300,
    radius: 30,
    velocity: 5,
    color: [34, 240, 40]
  };





function setup(){
    createCanvas(800, 600);     //create canvas to specfied size
    
}

function draw(){
    background(0);     //change background color

    fill(ball.color);                    //change ball color
    circle(ball.x, ball.y, ball.radius);         //draws a circle at (variable x, middle of screen) with radius of 20

    ball.x = ball.x + ball.velocity;        //add 5 balls x val to make it move

   
    if(ball.x == 800){          //if x location is == to 200,
       ball.x= 0;        //reset x back to zero
    }
    
}