//Given the words: “Cirro”, “cumulo”, “nimbo”, and “strato”, 
//write a loop that displays all of the words on the document, 
//with the word “and” in between. This loop should have two lines of code maximum in its block. 
//End result will look like “Cirro and cumulo and nimbo and strato and”. Use of array methods such as concat not allowed.



//store words in array to easily loop through
let words = ["Cirro", "cumulo", "nimbo", "strato"];

//refrence to div
let myDiv = document.getElementById("myDiv");


//loop through array to get each word, then add the word + "and" to the div
for(let i=0; i<words.length; i++){
    myDiv.innerHTML += words[i] + " and ";
}