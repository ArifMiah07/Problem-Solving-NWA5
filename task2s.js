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
const result = onlyBooksTitles(books);
console.log(result);