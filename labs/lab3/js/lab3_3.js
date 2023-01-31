//lab3.1 Polar Points
//Zane Smith
//January 30, 2023
//NewM-N220


//INSTRUCTIONS:
    //In addition to your setup() and draw() calls, add a new function named polarPoint()
    //Add one argument to polar point (r)
    //In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
    //Create a Y variable, set it to the result of r * Math.cos(mouseX);
    //Finally, at the end of the function, write return createVector(x,y); 




/*Algo:
    1.) create draw and setup functions,,,,, along with new polarPoint function
    2.) add 'r' as a param to polar point
    3.) create x variable and set it to r * Math.sin(mouseX); in polarPoint function
    4.) var y  = r * Math.cos(mouseX);in polarPoint function
    5.) return reateVector(x,y); in polarPoint function
    6.) test
        -> create variable and set it = to result of whatver the function returns
        -> translate 100, 100;
        -> draw a circle with results from functions
*/

function setup(){
    createCanvas(1200, 600);
    background(0);
}

function draw(){
    var res = polarPoint(50);
    translate(100,100);
    circle(res.x, res.y, 10); 

}

function polarPoint(r){
    var x = r * Math.sin(mouseX);
    var y = r * Math.cos(mouseX);

    return createVector(x, y);
}