// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const arrayFilteringAndMapping = () => {
  const people = [
    { name: "Ali", age: 19, gender: "male" },
    { name: "Azmir", age: 14, gender: "male" },
    { name: "Tareka", age: 43, gender: "female" },
    { name: "Rebeka", age: 23, gender: "female" },
    { name: "Mezba", age: 30, gender: "male" },
    { name: "Khaleda", age: 32, gender: "female" },
    { name: "Dalim", age: 31, gender: "male" },
  ];

  const malePerson = people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);

  return malePerson;
};

const result = arrayFilteringAndMapping();
console.log(result);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    {
        title: "Once upon a time",
        author: "mirazde zuve",
        year: 1011,
    },
    {
        title: "Look there is a mocking bird!",
        author: "David Naick",
        year: 1911,
    },
    {
        title: "Multiply by 3",
        author: "Sir Neu jack",
        year: 1611,
    },
    {
        title: "La Mujher, el hombre",
        author: "Cs Garcia",
        year: 1991,
    },
    {
        title: "Keu triple 9 e call deo",
        author: "",
        year: 1221,
    },
    {
        title: "The most hated Summer",
        author: "Smart Akbar",
        year: 1614,
    },
]

const onlyBooksTitles = (books)=> {
    const titles = books.map(book=> book.title);
    return titles;
}
const result2 = onlyBooksTitles(books);
console.log(result2);

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


// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

function sortCarsByYear() {
  const cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Civic", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Chevrolet", model: "Malibu", year: 2017 }
  ];
  
  const sortedCars = [...cars].sort((a, b) => a.year - b.year);
  
  console.log("Cars sorted by year:", sortedCars);
  return sortedCars;
}

sortCarsByYear();

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