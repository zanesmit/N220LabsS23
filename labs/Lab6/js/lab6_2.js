//Lab 6.2 Beep Bop
//Zane Smith
//Febuary 23, 2023
//NewM-N220



//INSTRUCTIONS:
//Write a loop that runs 25 times and writes the iterand (current iteration of the loop) 
////out onto the page inside of a div element.

//However,
//When the iterand is divisible by 3, write the word "beep" instead
//When the iterand is divisible by 5, write the word "bop" instead
//When the iterand is divisible by 3 AND 5, write "beepbop" instead



/*Algo:
    1.) write a forloop that loops 25 times writes the loop # onto page
    2.) if i%3 = 0, print beep
    3.) if i%5 == 0, print boop
*/

let myDiv = document.getElementById("myDiv");


for(let i = 0; i<=25; i++){
    let output = "";
    if(i%3 ==0){
        output += "beep";
    }
    if(i%5 ==0){
        output +="bop";
    }
    if(output == ""){
        output = i;
    }
    myDiv.innerHTML +=output + " ";
}