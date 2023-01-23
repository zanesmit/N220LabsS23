//Lab 2 algorithm CHECK-IN
//Zane Smith
//January 23, 2023
//NewM-N220


/*                              LAB 2.1 COUNTER 
INSTRUCTIONS:
    Create an application that outputs a number to the console every draw call of P5. 
    This number should start at zero, and increase by one every frame.

ALGO:
    1.) Make a global variable and intiate it zero
    2.) in the draw function add 1 to it<<will add one every frame
    3.) use consle.log(variable name) to show the number changing.
*/




/*                              LAB 2.2 PUCK SIDE
INSTRUCTIONS:
    Canvas size: 400x300. Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). 
    When the mouse is on the right half of the canvas, draw the circle in red. 
    When the mouse is on the left side of the canvas, draw the circle in blue.

ALGO:
    1.) Create canvas in setup function 
    2.) draw circle where mosuse is using mouseX, MouseY
    3.) fill circle red
    4.) use if statement
        -if mouseX is at the x poistion  less than or == to 200, fill blue
*/



/*                              LAB 2.3 WORLD WRAP
INSTRUCTIONS:
    Create a canvas 800px x 600 px.
    Make an application that starts drawing a ball on the left hand of the screen - make it move to the right 5 pixels per frame.
    Write the code so that when the circle reaches 800 pixels to the right, move the circle to the far left of the screen.

ALGO:
    1.) Create canvas in setup function based on instuctions
    2.) create a global variable "x" for the x valu and set it at 0(it will be increased in the draw function)
    3.) Create a circle in the draw function(on the left side of the screen//its location will be dependend on x variable)
    4.) in the draw function add 5
    5.) add an if statment tso the ball will go back to the starting position
        -if( x == 800) then reset x back to 0
        
*/
