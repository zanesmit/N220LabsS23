//Lab Midterm lab 2: Rock Paper Scissors (Guard)
//Zane Smith
//Febuary 28, 2023
//NewM-N220

//INSTRUCTIONS:
    //Make a game of rock-paper-scissors using DIVs as the buttons to select one of four options: rock, paper, scissors, and guard.
    //Add a space for a score display on the screen. Start the score at zero. (this will be tied to an application/global variable)

    //When any of the divs are clicked, run the logic for this game -

    //Generate a random move for the computer (rock/paper/scissors)
    //If the play chose guard
                //Skip the RPS logic, and subtract half a point from their score
    //Otherwise, run the RPS logic
            //Check to see if the player won against the computer
                    //If so, add one to their score
            //Check if the player lost
                    //If so subtract one from score
            //Check for tie
                    //If so, do nothing to score
    //Once the logic is complete,
            //show the results of the round: You chose X, computer chose Y. 
            //update the score

       

/*Algo:
    1.) Create 5 divs in the html
            -> 1 for the score
            -> other 4 for rock, paper, scissors, and guard
    2.) in js create global var for score(start at zero)
    3.) create an onclick function that runs anytime one of the words are clicked
            ->get random # 1/4
            ->checks what button is chosen by user and by computer
            & calculates rockpaperscissor logic
    4.) update score & display move
*/



let score = 0;     //global var to store the score
let scoreDiv = document.getElementById("score");        //used to access and manipulate score
let move =document.getElementById("move");


function onClick(element){
    let playerMove = element.id;   //get players choice

    if(playerMove == "guard"){
        score -= .5;
    }

   let compChoice =  getComputerChoice();//get computer choice

    if(playerMove == "rock" & compChoice == "scissors") {
        score++;
    }
    else if (playerMove == "paper" & compChoice == "rock") {
        score++;
    }
    else if (playerMove == "scissors" & compChoice == "paper") {
        score++;
    }
    else if (playerMove == "scissors" & compChoice == "rock") {
        score--;
    }
    else if (playerMove == "paper" & compChoice == "scissors") {
        score--;
    }
    else if (playerMove == "rock" & compChoice == "paper") {
        score--;
    }
    else{}




    scoreDiv.innerHTML = "Score: " + score; //edit score
    move.innerHTML = "You chose " + playerMove +", computer chose " + compChoice;   //display choices
}





//function to determine the computers play
function getComputerChoice(){
    let random = Math.ceil(Math.random() *3);       //gets random # 1-4
    var play;
    if(random == 1){
        play = "rock";
    }
    else if(random == 2){
        play = "paper";
    }
    else{
        play = "scissors";
    }
    return play;
}



