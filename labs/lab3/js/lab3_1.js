//lab3.1 Drawing Drawer
//Zane Smith
//January 30, 2023
//NewM-N220


//INSTRUCTIONS:
//Create a composition of some object - a car, a rocket, a set of keys.
//Move that composition code into a new function ("drawKeys()", for instance).
//Add two arguments to the function (x and y)
//Use those arguments to control the position of each of the drawing calls in the function (things like rect() and circle())
//Finally, either:
//Place the function call in the draw() function, and have your composition follow mouseX and mouseY
//Draw 3+ of your compositions in different spaces on the screen by writing your function call three or more times in either setup() or draw()




/*Algo:
    1.) use shapes to draw an object(a face)
    2.) move into its own function(draw face() )
        -> composed of circle for head, 2 circles for eyes, and ellipse for mouth
    3.) add 2 parameters to function(mouseX, mouseY) to follow mouse
    4.) change the values for the shaped location to the x & y passed in
        ->use addition on x & y values to ensure they eyes and mouth are always in the right spot on the face compared to the 
        heads location
*/



function setup(){
    createCanvas(1000, 600);
    background(0);
}

function draw(){
   
    drawFace(mouseX, mouseY);
}


function drawFace(x, y){
    background(0);

    //draw outline of face
    fill(223, 23, 140);
    circle(x, y, 400);

    //draw eyes
    fill(9, 34, 249);
    circle(x - 100 , y- 50, 20);
    circle(x+ 100, y- 50, 20);

    //draw mouth
    fill(30, 239, 10);
    ellipse(x, y + 100, 200, 50);
}

