// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function composeOperations() {
  const square = (num) => num * num;
  const double = (num) => num * 2;
  const addFive = (num) => num + 5;
  
  const composedFunction = (num) => addFive(double(square(num)));
  
  const input = 3;
  const result = composedFunction(input);
  
  console.log(`Input: ${input}, Result after square, double, and add 5: ${result}`);
  return result;
}

composeOperations();//3² = 9, 9*2 = 18, 18+5 = 23