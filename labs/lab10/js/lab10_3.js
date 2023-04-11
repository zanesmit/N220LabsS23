//Lab 10.1 Flash Cards
//Zane Smith
//April 13, 2023
//NewM-N220


//INSTRUCTIONS: 
//An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?".
    // Each button should have a data-answer attribute that lists the answer.

//When a button is clicked, display the answer to the button's question in a div. Use only one function, 
    //and that function must make use of the button's data-attribute.

/*Algo:
    1.)Create 3 buttons with questions on them
        -> add data-answer atriubute
    2.) add event listeners to each button
*/

let buttons = document.getElementsByTagName("button");
let answerDiv = document.getElementById('answer');


for(let i = 0; i<buttons.length; i++){
    addEventListener("click", answerQuestion);
}

function answerQuestion(){
    let answer = event.target.getAttribute("data-answer");
    answerDiv.innerHTML = `Answer: ${answer}`;

}
