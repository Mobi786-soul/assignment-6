greetUser("Akash");
console.log("Square of 5 is:", square(5));
let name = "Akash";             
const age = 21;                 
var isStudent = true;          
let hobbies = ["Reading", "Music", "Coding"];
const person = {                
  firstName: "Akash",
  lastName: "Kumar",
  age: 21
};

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Person Object:", person);

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else if (marks >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


console.log("Even numbers from 2 to 10:");
let j = 2;
while (j <= 10) {
  console.log(j);
  j += 2;
}


function greetUser(name) {
  console.log("Welcome, " + name + "!");
}

function square(number) {
  return number * number;
}
greetUser("Akash");
console.log("Square of 5 is:", square(5)); 