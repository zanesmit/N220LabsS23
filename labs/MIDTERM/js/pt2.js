//Using this button: <button>Mystery</button>: Write a program that, 
//after the button is clicked five times, changes the button’s text to “revealed”. 
//You will need to edit the button’s markup for this to work.


//global var to track # of clicks
let clicked = 0;

//refrence to button
let button = document.getElementById("myButton");


//each time button is clicked, counter is incremented
//if is clicked 5 times, change button label
function onClick(){
    clicked++;
    console.log(clicked);
    if(clicked == 5){
        button.innerHTML = "revealed";
    }
}

