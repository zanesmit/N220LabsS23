//Lab 5.2 McDiv'ns
//Zane Smith
//Febuary 13, 2023
//NewM-N220


//INSTRUCTIONS:
//Put a div on the page. 
//When the div is clicked, append the text "mc" to whatever is in its innerHTML. 
//After 3 clicks, the div will show "divdivdiv"


 




/*Algo:
    1.) put a div on the html page 
    2.) use document.getElementById to get that element and save as a variable
    3.) on each click append the div to add the text "div"
*/

let div = document.getElementById("McDiv");

div.addEventListener("click", onClick);

function onClick() {
    div.append("div");
}

