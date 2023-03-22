var counter = 0;

while (true) {
  console.log("This loop will run until counter reaches 10!"); // This statement will execute on every iteration of the loop
  counter++; // Increment the counter variable on each iteration
  if (counter === 10) {
    break; // If the counter reaches 10, break out of the loop
  }
}


let input = document.getElementById("input");


let number = document.getElementById("number");



function onClick(number){
  let output = input.value;
  for(let i =1; i<number.value; i++){
    output += input.value;
  }

  console.log(output)

}
