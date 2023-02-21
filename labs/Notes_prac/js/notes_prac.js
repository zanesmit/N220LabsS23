// Define a function that may throw an exception
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

// Call the function within a try-catch block to catch the exception
try {
  let result = divide(10, 5);
  console.log(result);
} catch (error) {
  console.log("Caught an error:", error.message);
}