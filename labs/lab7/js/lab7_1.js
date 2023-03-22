//Lab 7.1 Greeter
//Zane Smith
//March 22, 2023
//NewM-N220


//INSTRUCTIONS: Create an page with an input, and a button. 
//When the button is clicked, output the phrase "Hello {Name}" to the developer console, 
    //with {Name} being the value the user put into the input field.

 




/*Algo:
    1.) create an input field & a button in the html and give it an id

    2.) use the id to get the value of the input field in js
    3.) console.log(the name from the input field)
   
*/
 
let username = document.getElementById("name");


function sayHi(){
    console.log("Hello " + username.value + " !!!");
}