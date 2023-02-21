//Lab 6.1 Loop, but big
//Zane Smith
//Febuary 23, 2023
//NewM-N220


//INSTRUCTIONS:
        ///Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. 
        //There should only be one line of code inside of your loop.

/*Algo:
    1.) put a div inside the html
    2.) use getelementbyid to acess the div
    3.) write a for loop from 1 to 5(each time it will multiple the looping # by 5)
        ->output it into div using inner html
*/



// Get a reference to the div element
let myDiv = document.getElementById("myDiv");

// Loop from 1 to 5, multiplying the index by 1000 putting it in the div
for (let i = 1; i <= 5; i++){
    myDiv.innerHTML += i * 1000 + " ";
}
