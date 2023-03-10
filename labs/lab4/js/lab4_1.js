//Lab 4.1 Data-driven display w/ function
//Zane Smith
//Febuary 7, 2023
//NewM-N220


//INSTRUCTIONS:
//Make an object with all the properties for a graphic on the screen - width, height, color, position. 
//These numbers could represent positions of wheels, eye colors, or rainbow lengths. 
//In your create or draw function draw that object to the screen using the data in your object 
//          - using a series of fill commands, draw commands, and whatever else you need to draw the object to the screen. 
//Try to not hard-code any numbers in the drawing commands - only use the object properties to set sizes, colors, or position.

//The, create a function that takes one argument and draws an object to the screen using that object argument.
// Pass your object to that function as an argument, and have the function draw the object to the screen. An example function is below:

 




/*Algo:
    1.) Create an object for a eyes
            -> give properties for x position, y position, radius, color
    2.) use object in draw method to draw what is needed
    3.) move code to draw eeys from draw fucntion into a drawEyes(Eyes) function
    4.) now call the drawEyes() function in the draw function to make it draw eyes based on the Eyes object properties
*/




let Features = {
    eyeX: 500,
    eyeY: 250,
    eyeRadius: 50,
    eyeColor: [9, 34, 249],
    mouthX: 500,
    mouthY: 400,
    mouthWidth: 200,
    mouthHeight: 50,
    mouthColor: [30, 239, 10]
  };


function setup(){
    createCanvas(1000, 600);
    background(0);
}

function draw(){
    background(0);

    //draw outline of face
    fill(223, 23, 140);
    circle(500, 300, 400);

    //draw mouth
 

  drawFeatures(Features);



    
}




function drawFeatures(Features){


    fill(Features.eyeColor);
    circle(Features.eyeX - 50, Features.eyeY, Features.eyeRadius);
    circle(Features.eyeX + 50, Features.eyeY, Features.eyeRadius);
       
    fill(Features.mouthColor);
    ellipse(Features.mouthX, Features.mouthY, Features.mouthWidth, Features.mouthHeight);

}