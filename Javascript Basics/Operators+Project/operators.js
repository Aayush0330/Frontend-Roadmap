/*

🧠 1. Types of Operators in JavaScript:-

Operator Type                    Examples                           Use


Arithmetic	                     + - * / % ++ --	                Math operations

Assignment	                     = += -= *= /=	                    Value assign karna

Comparison	                     == === != !== > < >= <=	        Compare karna

Logical	                         &&	 || !

String Concatenation	         +	                                Strings jodna

Type	                         typeof	                            Type check karna


*/

// 🧮 Arithmetic:

let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x % y); // 0 (remainder)

// 🔗 Assignment:

let score = 5;
score += 3; // score = score + 3

// 🔍 Comparison

console.log(5 == "5");  // true (only value check)
console.log(5 === "5"); // false (value + type)

// 💡 Logical:

let age = 18;
console.log(age >= 18 && age <= 60); // true

// 🧵 String Concatenation:

let name = "Aayush";
console.log("Hello " + name); // Hello Aayush
