//Lab 9.1 Its just average
//Zane Smith
//April 5, 2023
//NewM-N220


//INSTRUCTIONS: Create an application that:
    //Takes in a list of comma-separated numbers from the user
    //Splits that list into an array of numbers
    //Converts the string version of the numbers into number versions
    //Loops through the array and sums up the values
    //Calculates the average of the array
    //Displays to the user
    //The average
    //The sum
    //Removes the text from the input so the user can type in new numbers

 

/*Algo:
    1.) Create an input field for comma seperated numbers
    2.) create a buttion for user to submith numbers
    3.) get the user inputer numbers, and spit them
    4.) loop through and sum the numbers
    5.) use the sum to find the average
    6.) display output to users
    7.) remove text  
*/
 
let numbers = document.getElementById("numbers");
 



function doStuff(){

    let array = numbers.value;          //get user input values
    array = array.split(",");              //split to get array
    let numArray = [];

    for(let i =0; i<array.length; i++){     //vhange values of array from string to numbers to numbers
        numArray[i] = Number(array[i]);
    }
    let sum = 0;
    for(let i =0; i<numArray.length; i++){  //get sum
        sum += numArray[i];
    }
 

    let avg = sum/numArray.length;      //get avg

    //display to user
    document.getElementById("result").innerHTML = "AVERAGE: " + avg + " SUM: " + sum ;

    numbers.value = ""; //clear input field
}

