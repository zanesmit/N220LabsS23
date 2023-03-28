//Lab 8.1 Is Divisible By Seven
//Zane Smith
//March 29, 2023
//NewM-N220


//INSTRUCTIONS: Create an application that with an input and a button. 
    //When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not.
    //Use a separate function from the onclick function to discern if it is divisible. 
    //This function should return either true if it is divisible  or false if it is not.

 




/*Algo:
    1.) create an input field & a button in the html and give it an id
    2.) Create a div on the page that can later be updated
    3.) create an onlclick button that checks if the input is divisible by 7
        -> if it is return true//if not, false

*/
 
let number = document.getElementById("number");
 



function check(){

    let answer = is_Divisible();
    console.log(answer);

    if(answer == true){  // check if number mod 0 ==7
        document.getElementById("result").innerHTML = "true";
    }
    else {
      
      document.getElementById("result").innerHTML = "false";
    }
  
}

function is_Divisible(){

    let mod = number.value % 7;
    if(mod == 0){  // check if number mod 0 ==7
       return true;
    }


}
