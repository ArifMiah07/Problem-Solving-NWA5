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