//Lab 8.3 Cleanup
//Zane Smith
//March 29, 2023
//NewM-N220


//INSTRUCTIONS: Make a function that takes a string, and removes every instance of "#" from the string, 
                //and returns the "cleaned up" version without the hashtags/octothorpes. 

//Write a web page to test the function - one button and input, and one div. 
    //When the button is pressed, take the input, use the function to remove the hashtags, and show the result string on the page.




/*Algo:
    1.) In the html, create an input, div, and button
            ->give the input field a unique id to get the input
            ->give the button a link to a function
    2.) in the function replace all occurances of "#" character
            ->use .replaceAll();
    3.) put new output to div on screen
*/
 
let input = document.getElementById("input");
 



function cleanup(){
    let userString = input.value;
    userString = userString.replaceAll("#", '')     //replaces hastag with nothing(deletes it)
    
    document.getElementById("result").innerHTML = userString;//add cleaned string to page

}

