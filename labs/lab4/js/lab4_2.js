//Lab 4.2 Reverse Tennis
//Zane Smith
//Febuary 7, 2023
//NewM-N220

//INSTRUCTIONS:
//Create two objects with properties for the x, y, width, and height for a 'tall' rectangle. 
//Set their 'x' properties so that when drawn, one will appear on the left side of the composition, and the other on the right side.

//In the draw function,

//draw both of the rectangles in the objects to the screen, based on their properties
//if the up key is pressed, make the first object move up, and the second object move down
//if the down key is pressed, make the first object move down, and the other object move up     

// if (keyIsDown(UP_ARROW)) {
    //change properties
 // }


/*Algo:
    1.) Create 2 objects
            -> give properties for x position, y position, width, & height
                ->ensure x positions are on opposite sides of eachother
    2.)in draw function, draw both rectangles based on their properties
    3.)use if statment for keyup/down propery
            -> if key up is pressed, rectangle 1's y value increases & rectangle 2's decreases
            -> if key down is pressed, rectangle 1's y value decreases & rectangle 2's increases
*/



let rectangle1 = {
    x: 100,
    y: 100,
    width: 50,
    height: 400
  };

  let rectangle2 = {
    x: 900,
    y: 100,
    width: 50,
    height: 400
  };


function setup(){
    createCanvas(1000, 600);
    background(0);
}

function draw(){
    background(0);

    rect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);
    rect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);
    if (keyIsDown(UP_ARROW)) {
        rectangle1.y+=5;
        rectangle2.y-=5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        rectangle1.y-=5;
        rectangle2.y+=5;
    }




    
}




