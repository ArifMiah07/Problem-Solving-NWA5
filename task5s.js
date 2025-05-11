// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

function sumEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const sumOfEven = numbers.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
  
  console.log("Sum of even numbers:", sumOfEven); 
  return sumOfEven;
}

sumEvenNumbers();// 2+4+6+8+10 = 30