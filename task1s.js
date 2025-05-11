// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
    {name: "Ali", age: '19', gender: "male"},
    {name: "Azmir", age: '14', gender: "male"},
    {name: "Tareka", age: '43', gender: "female"},
    {name: "Rebeka", age: '23', gender: "female"},
    {name: "Mezba", age: '30', gender: "male"},
    {name: "Khaleda", age: '32', gender: "female"},
    {name: "Dalim", age: '31', gender: "male"},
]

const malePerson = people.filter(person=> person.gender == 'male').map(person => person.name)

console.log(malePerson)