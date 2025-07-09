/*

📘 What are Data Types?
Data type ka matlab:

Variable ke andar kaisa data rakha gaya hai?
Jaise number hai, ya text, ya true/false, ya empty...

There are 2 types of datatype :-

1.Primary datatype :
    .Number
    .string
    .Boolean
    .Null
    .Undefined
    .BigInt
    .Symbol

2.Non-Primary datatype or Refference datatype:
    .Object
    .Array

*/

let name = "Aayush"; // string
let age = 21; // number
let logIn = true; // boolean
let Address; // undefined
let favFood = null; // null

console.log("Name:", typeof name);
console.log("Age:", typeof age);
console.log("LogIn:", typeof logIn);
console.log("Address:", typeof Address);
console.log("FavFood:", typeof favFood);

let product = {
  productName: "ToyCar",
  productPrice: 499,
};

console.log("Object:", typeof product);

let heros = ["Superman", "Batman", "Spiderman", "Krrish"];

console.log("Array:", typeof heros);

let fun = function addNum(a, b) {
  return a + b;
};

console.log("Function:", typeof fun);
