document.querySelector('h1').textContent = "Latihan JavaScript Selesai";

let name = "John";
const age = 30;
document.getElementById("output").innerHTML = `Name: ${name}, Age: ${age}`;

let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => document.getElementById("output").innerHTML += `<br>${fruit}`);

let person = {firstName: "John", lastName: "Doe", age: 30};
document.getElementById("output").innerHTML += `<br>${person.firstName} ${person.lastName}`;

function checkValue() {
    let value = document.getElementById("userInput").value;
    let output = document.getElementById("output");

    if (value > 10) {
        output.innerHTML = "Nilai lebih besar dari 10";
    } else if (value == 10) {
        output.innerHTML = "Nilai sama dengan 10";
    } else {
        output.innerHTML = "Nilai kurang dari 10";
    }

    for (let i = 1; i <= value; i++) {
        output.innerHTML += `<br>${i}`;
    }
}

function greet(name) {
    return `Hello, ${name}`;
}
document.getElementById("output").innerHTML = greet("Alice");

function calculateSquare(number) {
    return number * number;
}
document.getElementById("output").innerHTML += `<br>${calculateSquare(5)}`;

const addNumbers = (a, b) => a + b;
document.getElementById("output").innerHTML += `<br>${addNumbers(2, 3)}`;

let students = ["Alice", "Bob", "Charlie"];
students.push("David");
students.forEach(student => document.getElementById("output").innerHTML += `<br>${student}`);

let car = {brand: "Toyota", model: "Corolla", year: 2020};
for (let key in car) {
    document.getElementById("output").innerHTML += `<br>${key}: ${car[key]}`;
}

let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2018},
    {brand: "Ford", model: "Focus", year: 2019}
];
cars.forEach(car => document.getElementById("output").innerHTML += `<br>${car.brand} ${car.model} (${car.year})`);
