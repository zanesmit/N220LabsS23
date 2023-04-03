//Lab 9.2 Bad word catcher with loops
//Zane Smith
//April 5, 2023
//NewM-N220


//INSTRUCTIONS: 
/*For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string */

 

/*Algo:
    1.) Create an input field for text
    2.) create a buttion for user to submit 
    3.) split input on spaces for words 
    4.) loop through and look for bad words
        -> if contains a badword, add one to the counter

*/
 
let wordsInput = document.getElementById("words");

function doStuff(){
    let words = wordsInput.value;    //get value from input
    let wordsArr = words.split(" ");    //split on spaces into an array

    let counter = 0;
    for(let i = 0; i<wordsArr.length; i++){
        if(wordsArr[i] == "clear" || wordsArr[i] ==="water" || wordsArr[i] == "tires"){
            counter++;
        }
    }

    //display to user
    document.getElementById("result").innerHTML = "# of badwords: " + counter ;

    wordsInput.value = ""; //clear input field
}
