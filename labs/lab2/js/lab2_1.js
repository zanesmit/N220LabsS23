//lab2.1 Counter
//Zane Smith
//January 23, 2023
//NewM-N220


//INSTRUCTIONS:
//Create an application that outputs a number to the console every draw call of P5. 
//This number should start at zero, and increase by one every frame.


/*Algo:
    1.) Make a global variable and intiate it zero
    2.) in the draw function add 1 to it<<will add one every frame
    3.) use consle.log(variable name) to show the number changing.
*/


var counter = 0;        //global variable to store counter

function setup(){
    createCanvas(1200, 768);
}

function draw(){
    counter +=1;        //add one to counter variable
    console.log(counter);

}