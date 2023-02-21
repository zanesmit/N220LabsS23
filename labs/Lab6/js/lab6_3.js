//Lab 6.3 Runner up
//Zane Smith
//Febuary 23, 2023
//NewM-N220


//INSTRUCTIONS:
    //Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.
    //Then, write the line of code that displays the runner-up times (second and third place) in two different divs.

/*Algo:
    1.) create in array w/ 3 number elements
        -> write in order from highest to lowest
    2.)put 2 divs in html(id = runnerup1 & runnerup2)
    3.)print to respective divs
*/


let bestTimes = [0, 10, 20];


let runnerUp1 = document.getElementById("runnerUp1");
let runnerUp2 = document.getElementById("runnerUp2");


runnerUp1.innerHTML = "Runner-up 1: " + bestTimes[1];
runnerUp2.innerHTML = "Runner-up 2: " + bestTimes[2];