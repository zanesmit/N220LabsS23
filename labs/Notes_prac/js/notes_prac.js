//Write a function that takes one argument, and returns a true if that argument is a vowel, and false if it is not. ( "a" would return true, "H" would not). 
//Use stringName.toLocalUppercase() to ensure its always an uppercase character you are comparing to.
//( push goal - consider how this can be done with a loop )


//let input = document.getElementById("input");


function identifyVowel(letter){
  letter = letter.toUpperCase();
  if(letter == "A" ||letter == "E"||letter == "I"||letter == "O"||letter == "U" ){
    return true;
  }
  
  return false;
}




function removeVowel(letter){
  for(let i =0; i<letter.length(); i++){
    let vowel = identifyVowel(letter[i]);
    if( vowel ==true){

    }
    
  }

}



let word = "o";


console.log(identifyVowel(word));