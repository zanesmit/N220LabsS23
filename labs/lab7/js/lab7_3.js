//Lab 7.3 Password Protected
//Zane Smith
//March 22, 2023
//NewM-N220


//INSTRUCTIONS:  Create an application with two input fields and one button.
    //When the button is clicked, verify the user has written these (exact) strings in the first and second field:
    //First field should be  "Username"
    //Second field should be  "Password"
    //If the two fields match, update a DIV on the page with the text "Success" or else "Wrong information".

    //For this assignment: use only one if statement to to the check.
    //Remember you'll need to use the double-equals (==) to check for equality, and the double-ampersand to check if two things are true.
    //if( (oneThingIsTrue) && (anotherThingIsTrue) ) {}



/*Algo:
    1.) create 2 input field & a button in the html and give it them unique id's
        ->use type = username & tyoe = password
    2.)create a div, so that it can be updated if successfull 
    3.) get values from username and passwords
    4.)Check to see if they match
        ->if yes, update div to "sucess"
        ->if no, update div to "fail"

 
*/
 
let username = document.getElementById("username");   
let password = document.getElementById("password");


function check(){

    if(username.value == "Username" && password.value == "Password"){  // Check if the username and password are correct using a single if statement
        document.getElementById("result").innerHTML = "Success";
    }
    else {
      // Update the result DIV with an error message
      document.getElementById("result").innerHTML = "Wrong information";
    }
  
}
