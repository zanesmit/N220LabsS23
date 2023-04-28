//array containing word selections 
const possibleWords= ["paisley", "hangman", "kangaroo", "lemonade", "television", "chocolate", "ninja", "astronaut", "isolate", "basketball"];

//global vars to track correct & incorrect guesses to know when game ends
let incorrectGuesses = 0;
let correctGuesses = 0;

//chose word randomly
let randomNum = Math.floor(Math.random() * 10);
let WORD =possibleWords[randomNum];

//boolean to track win staus for win animation
let win = false;

//Add event listerner to each button
let buttons = document.getElementsByTagName("button");
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", getValue);
}

//onlclick function// 
function getValue(){
    //get the letter the user guessed
    let userGuess = event.target.getAttribute("data-letter");

    //if the users guess is included in the word, enter it into the answer slot
    if(WORD.includes(userGuess)){
        let correctGuess = document.getElementsByClassName(userGuess);
        for(let i =0; i<correctGuess.length; i++){
            //styling for the letters placed in answer slot
            correctGuess[i].value = userGuess.toUpperCase();
            correctGuesses++;
            correctGuess[i].style.color = "green";
            correctGuess[i].style.fontSize = "20px";
            correctGuess[i].style.textAlign = "center";
        }

        //changes letter buttons to green if its been used & is a part of word
        event.target.style.backgroundColor = "green"; 
        event.target.style.border = "3px solid black";

        //if all correct guesses are made, run draw functions to display win screen
        if(correctGuesses ==WORD.length){
            drawer();
        }
    }

    //if guessed letter is not in the word
    else{
        incorrectGuesses ++;
        //create new element, so guessed letters can be styled red without chanings the correct guesses from green 
        let newLetter = document.createElement("span"); // create a new span element
        newLetter.style.color = "red"; // apply the color to the span element
        newLetter.textContent = userGuess.toUpperCase() + ", "; // set the text content to the new letter
        guessedLetters.appendChild(newLetter); // append the new span element to the guessedLetters element

        //changes buttons to red if its been used & not part of word
        event.target.style.backgroundColor = "red"; 
        event.target.style.border = "3px solid black";
        //run draw function to draw hangman, or losing screen
        drawer();
    }

    event.target.disabled = true;   //Disables the buttons after a user clicks it
    event.target.style.cursor = "not-allowed";
}


//funtion create an input box that can not be edited used to show correct letters
function createAnswerSlot(){
    let answerSlotContainer = document.getElementById("answerSlotContainer");
    //Create slot for each letter of the chosen word to display correct answer
    for(let i=0; i<WORD.length; i++){
        var x = document.createElement("INPUT"); 
        //setting attributes of the ellemnt       
        x.setAttribute("type", "text");
        x.setAttribute("readonly", true);       
        x.setAttribute("data-letter", WORD[i]);
        x.setAttribute("class", WORD[i]);

        //style for the answer slots
        x.style.borderColor = "green";
        x.style.borderWidth = "10px";
        x.style.width = "75px";
        x.style.height = "30px";
        x.style.background = "black";
        x.style.fontWeight = "bold";
        answerSlotContainer.appendChild(x);
    }
    answerSlotContainer.style.textAlign = "center"; //center answer slot
}


function setup(){
    //create canvas
   let c = createCanvas(1000, 400);
    c.parent('canvasHolder');        //put canvas inside div to be able to center it
    background(136, 137, 143);
    //draw hangman gallow
    strokeWeight(10);
    line(333, 350, 666, 350);
    line(333, 350, 333, 50);
    line(333, 50, 444, 50);
    strokeWeight(5);
    line(444,50, 444, 90);

    createAnswerSlot();
    stylePage();
}


function drawer(){
    //if user wins
    if(correctGuesses ==WORD.length){
        //background(0, 255, 0);
        //textSize(50);
        win = true;
        draw();
        //text("YOU WIN!!!!!!!!", 300, 200);
        //disable buttons if user wins
        for(let i = 0; i<buttons.length; i++){
            buttons[i].disabled = true;
            buttons[i].style.opacity = "0.5";
            buttons[i].style.cursor = "not-allowed";
        }
        tryAgain();     //add play again button if user wins
    }
    // else ifs add the drawing for the hangman
    else if(incorrectGuesses ==1){
        circle(444,90,30);
    }
    else if(incorrectGuesses ==2 ){
        line(444, 110, 444, 180)
    }
    else if(incorrectGuesses ==3 ){
        line(444, 180, 500, 220)
    }
    else if(incorrectGuesses ==4 ){
        line(444, 180, 388, 220)
    }
    else if(incorrectGuesses ==5 ){
        line(444, 130, 388, 150)
    }
    else if(incorrectGuesses ==6 ){
        line(444, 130, 500, 150)
    }
    //else user loses
    else{
        background(255, 0, 0);
        textSize(50);
        text("YOU LOSE!!!!!!!!", 300, 200);

        //Disable all buttons if you lose, style  to make it obvious that you can not use them
        for(let i = 0; i<buttons.length; i++){
            buttons[i].disabled = true;
            buttons[i].style.opacity = "0.5";
            buttons[i].style.cursor = "not-allowed";
        }

        //Places the correct answers to answer slot in red without chaning the green
        let uniqueArr = [...new Set(WORD)];
        for(let i = 0; i<uniqueArr.length; i++){
            let correctLetter = document.getElementsByClassName(uniqueArr[i]);
            for(j=0; j<correctLetter.length; j++){
                //Check if letter spot is empty
                if (correctLetter[j].value === '') {
                    correctLetter[j].value = uniqueArr[i].toUpperCase();
                    correctLetter[j].style.color = 'red';
                    correctLetter[j].style.fontSize = "20px";
                    correctLetter[j].style.textAlign = "center";
                }
            }
        }
        tryAgain();     //add play again button if user loses
    }
}


//FUNCTION TO STYLE THE PAGE WHEN IT LOADS (used in p5 setup funciton)
function stylePage(){
    //change backgound of entire page
    document.body.style.background = "rgb(136, 137, 143)"; 
    //center canvas
    document.getElementById("canvasHolder").style.textAlign = "center";

    //STYLING FOR LETTER BUTTONS
    buttonPrt = buttons[0].parentElement;   //acess the parent element, to center the buttons on the page
    buttonPrt.style.textAlign = "center";
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.color = "white";
        buttons[i].style.backgroundColor = "black";
        buttons[i].style.width = "50px";
        buttons[i].style.height = "30px"
        buttons[i].style.border = "3px solid green";
        buttons[i].style.fontSize = "20px";
        buttons[i].style.margin = "5px";
        //animation when mouse is over the button
        buttons[i].addEventListener("mouseover", function() {
            buttons[i].style.backgroundColor = "white";
            buttons[i].style.color = "black";
        });
        //animation to revert back when mouse leaves button
        buttons[i].addEventListener("mouseout", function() {
            buttons[i].style.backgroundColor = "black";
            buttons[i].style.color = "white";
        });
    }//end styling for buttons

    //STYLING FOR GUESSED LETTER TRACKER
    let guessedDiv =  document.getElementById("guessedLetters");
    guessedDiv.style.textAlign = "center";
    guessedDiv.style.fontSize = "30px";
    guessedDiv.style.margin = "30px";
    guessedDiv.style.border  = "10px solid #FFD700";
    guessedDiv.style.fontWeight = "bold";

    //styling for title
    let title = document.querySelector("h1");
    title.style.textAlign = "center";
    title.style.fontFamily = "Helvetica, Arial, sans-serif";
    title.style.fontSize = "48px";
    title.style.textShadow = "2px 2px 2px green";
    title.style.background = "linear-gradient(to right, green, yellow,  red)";
    title.style.border = "2px dashed black";
}

//Funtion to create a play again button when the game ends
function tryAgain() {
    const button = document.createElement('button');
    button.textContent = 'Play Again';
    button.disabled = false;
    button.style.backgroundColor = "yellow";
    button.style.textAlign = "center";
    button.style.margin = "15px";
    button.addEventListener('click', () => {
        location.reload();
    });
    document.body.appendChild(button);
}





let angle = 0;

//win animation
function draw() {
    if (win ==true) {
        background(0, 255, 0);
        translate(width/2, height/2);
        rotate(angle);
        textSize(64);
        fill(0);
        text("YOU WIN!", -100, 0);
        angle += 0.1;
    }
}


/* ALGO 
    1.) Create an array of 10 Random words  
        -> get a randowm word from the array 
    2.) create a global var to track the # of guesses & # of incorrect guesses  
    3.)Create buttons on the html page for each letter, 
        ->add onclick function to each letter that checks if that letter is contained in random word
                ->if it is, display letter in correct location of word
                ->if not, draw a piece of the hangman and add one to # of guesses
        -> if user clicks a button, disable it so that letter can not be guessed again
    4.) if #of incorrect guesses = 7, use p5 to display a losing screen, and display the correct word  
            ->or if # of correct guesses = # of letters in the word, then draw win screen
    5.) create a spot to display the correct letters that have been guessed 
    6.)after game is over, add play again button 
    */