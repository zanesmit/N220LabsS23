//Lab 7.2 Tip Calculator
//Zane Smith
//March 22, 2023
//NewM-N220


//INSTRUCTIONS:  Make a page with one input and one button (Seeing a trend?). 
//When the button is clicked (assuming the value typed into the input is numerical), 
//calculate both the tip and the full value of the bill to be paid. Output both to the console, formatted as such:
//"Tip: $X. Total: $X" 




/*Algo:
    1.) create an input field & a button in the html and give it an id
        ->use type = number to ensure you only get numbers

    2.) use the id to get the value of the bill input field in js
    3.) caluclate tip and total
    3.) console.log("Tip: $X. Total: $X" ) 
*/
 

 

function getTip(){
    // Get the value of the bill input field
    var total = parseFloat(document.getElementById("total").value);

    // Check if the value is a number
    if (isNaN(total)) {
        console.log("Please enter a valid bill amount.");
        return;
    }

    let tip = total * .25;
    let totalBill = total + tip;


    console.log("Tip: "+ tip.toFixed(2) +" Total: " + totalBill.toFixed(2));//use .toFixed(2) to round
}