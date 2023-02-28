//Lab midterm lab 1 UI Navigation Highlighter
//Zane Smith
//Febuary 28, 2023
//NewM-N220


//INSTRUCTIONS:
    //Make an application with six divs on the screen, each with a different word.
    //When any of the divs is clicked,
        //highlight that that div by changing its background color and making the text bold
        //remove the bold/background highlight from any other divs
        //add the clicked div's text into a seperate div at the top of the screen
       

/*Algo:
    1.) put 6 divs inside the html(use put a different word in each)
            -> give each a unique id, so we can get an element individually 
            -> give each div the same class name, so we can reset the style

    2.) create a function that will change use .style to change the color & background of the clicked element
    3.) Create another function to set the style back to the default
    4.) create another div to store the clicked divs text at the top of screen
            ->use .textcontent to get elements text
            ->use.innerHTML to change text at top of screen

    */





// Get a reference to each of element with class name "myClass" (returns array-like collection)
let myClass = document.getElementsByClassName("myClass");

let word = document.getElementById("word");

function onClick(element){
    removeStyle();          //removes the styling from each element

    //changes style of selected element
    element.style.backgroundColor = "red";      
    element.style.fontWeight = "bold";

    let elementWord = element.textContent;      //get the text stored in the div
    word.innerHTML = elementWord;               
}


function removeStyle(){
    //use a loop to go through each element in with id "myClass" & reset the style style
    for(let i =0; i<myClass.length; i++){
        myClass[i].style.backgroundColor = "white";     //reset background color to white 
        myClass[i].style.fontWeight = "normal";         //reset font to normal
    }
}