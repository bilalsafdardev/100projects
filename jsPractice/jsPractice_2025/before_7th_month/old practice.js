// ✅ 1. Declare a variable named `name` using `let`, and assign it your name. 
// Then, reassign it with a different name and log both to the console.

let name = "Bilal"
console.log(name)

name = "Ali"
console.log(name)

// ✅ 2. Declare two constants: one for your birth year and one for the current year.
// Calculate and log your age using these constants.

const birthYear = 2004
const currentYear = 2025
let age = currentYear - birthYear

console.log(age)

// ✅ 3. Identify the data types of the following values:
// let x = "Hello"; let y = 42; let z = true; let a; let b = null; let c = {};

console.log(typeof("Hello"));
console.log(typeof(42));
console.log(typeof(true));
console.log(typeof(a));
console.log(typeof(null));
console.log(typeof({}));

// ✅ 4. Declare a variable called `temperature`.
// Write a condition: if temperature > 30, log "It's hot", else log "It's pleasant".

let temperature = 20;

    if(temperature > 30) {
        console.log("It's hot")
    } else {
        console.log("It's pleasant")
    }

// ✅ 5. Use the ternary operator to check if a number is even or odd.
// Store the result in a variable called `result` and print it.

let number = 5;
let results = (number%2 === 1) ?"odd" : "even";
console.log(results)

// ✅ 6. Write a switch statement that logs a message depending on a `day` variable:
// For example: "Monday" → "Start of the week", "Friday" → "Weekend loading...", etc.

let day = "Friday";

switch (day) {
    case "Monday":
        console.log("Week Starts Here");
        break;
    case "Tuesday":
        console.log("Week's 2nd Day");
        break;
    case "Wednesday":
        console.log("Week's 3rd Day");
        break;
    case "Thursday":
        console.log("Center of Week");
        break;
    case "Friday":
        console.log("Weekend loading...");
        break;
    case "Saturday":
        console.log("Enjoy your weekend!");
        break;
    case "Sunday":
        console.log("Week Ends Here");
        break;
    default:
        console.log("Invalid day input");
}

// ✅ 7. Write a loop to print numbers from 1 to 10.

for(let number = 1; number<11; number++) {
    console.log(number)
}

// ✅ 8. Write a loop to calculate the sum of numbers from 1 to 100.
// Log the final sum after the loop ends.

let sum = 0;
for(let i = 1; i<101; i++) {
    sum = sum + i;
}

console.log(sum)

// ✅ 9. Create a loop that prints the multiplication table of 7 from 1 to 10.

for(let i = 1; i<11; i++) {
    console.log(`7 * ${i} = ${7 * i}`)
}

// ✅ 10. Declare a function `greetUser(name)` that logs a greeting message like:
// "Hello, Rahul! Welcome to JavaScript."

function greetUser(name) {
    let message = "Hello, " + name + "! Welcome to JavaScript."
    console.log(message)
}

greetUser("Bilal")

// ✅ 11. Write a function `isAdult(age)` that returns true if age is 18 or more, else false.
// Call the function with multiple values and print results.

function isAdult(age) {
    return (age >= 25) ? true : false;
}

console.log(isAdult(28))

// ✅ 12. Create a function `calculateBMI(weight, height)` that calculates BMI using the formula: 
// BMI = weight / (height * height) and returns the result.

function calculateBMI(weight, height) {
    return (BMI = weight / (height * height));
}

console.log(calculateBMI(85, 1.58496))

// ✅ 13. Write a function `reverseString(str)` that takes a string and returns its reverse.
// Example: "hello" → "olleh"

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"))

// ✅ 14. Use nested loops to print the following pattern:
// *
// * *
// * * *
// * * * *

for (let i = 4; i>0; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* "
    }
    console.log(stars);
}

// ✅ 15. Challenge: Write a function `isPrime(num)` that checks if a number is prime.
// Use a `for` loop to check from 2 to num-1 and return true/false accordingly.

function isPrime(num) {
    if (num === 2) return true;

    for (let i = 2; i < Math.sqrt(Math.abs(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    if (num <= 1) return false;
    return true;
}

console.log(isPrime(13));


// 🟢 1. Variables & Declaration

// 16: Declare three variables using var, let, and const. Try changing their values. What happens?

let abc = 12;
var def = 34;
const ghi = 45;

abc = 355;
def = 768;
// ghi = 965;

console.log(abc)
console.log(def)
console.log(ghi)

// 17: Declare a variable using let without assigning a value. Then assign a value in the next line.

let i;
i = 12;
console.log(i)

// 18: What will happen if you try to redeclare a variable with let or const?

let x = 12;
// let x = 23;

// const y = 34;
const y = 45;

console.log(x);
console.log(y);

// 19: Try accessing a variable before its declaration using var, let, and const. Note the difference (hoisting).

console.log(abc)
console.log(def)
console.log(ghi)

// let abc = 12;
// const ghi = 45;
var def = 34;

// 20: Create a variable inside a block `{}` using var and another using let. Can you access them outside the block?

function add() {
    let va = 12;
    var vb = 56;
    let sum = va + vb;   
}
console.log(add())

// 21: Create a constant variable for PI. Try reassigning it. What happens and why?

const PI = 'Access Denied';
// const PI = 'Access';

console.log(PI);

// 22: Why should you prefer let over var? Give an example.

'Globe Scope = var, while Block Scope = let' 


// 🟢 2. Data Types & Type System

// 23: Declare variables of all primitive types in JS (string, number, boolean, null, undefined, symbol, bigint).

let str = 'Hello!';
let num = 7;
let myBoolean = true;
let myNullVar = null;
let myUndef;
let mySymbol = '*';
let myBigint = 389438942394754985734n;

console.log(str);
console.log(num);
console.log(myBoolean);
console.log(myNullVar);
console.log(myUndef);
console.log(mySymbol);
console.log(myBigint)

// 24: What will typeof null return? Is it expected?

'Yes, Object'
console.log(typeof null); // Object

// 25: Create an object and an array. Check their types using typeof. Are they primitive or reference types?

console.log(typeof {}); // Object
console.log(typeof []); // Object

// 26: Convert a string to a number using two methods. Then check the types.

let str1 = '123';
let str2 = '456';

let num1 = Number(str1);
let num2 = +str2;

console.log(typeof(num1));
console.log(typeof (num2));

// 27: Try adding a string and a number. Explain what happened. Then subtract a string from a number.

let str3 = '456';
let num3 = 789;
let sum1 = str3 + num3;
// Concatination Happens
console.log(sum1);


// 🟢 3. Operators

// 28: Write a small expression using all arithmetic operators (+, -, *, /, %, **).

function opArithematic() {
    let v1 = 12;
    let v2 = 34;
    
    let add = v1 + v2;
    let sub = add - 2;
    let multiply = sub * 25;
    let divide = multiply / 6;
    let exponent = divide ** 101;
    let remainder = exponent % 113;
    
    console.log(remainder);
}

opArithematic()

// 29: Use == and === to compare 5 and '5'. What’s the difference?

console.log(5 === '5');
console.log(5 == '5');

// 30: Use logical operators (&&, ||, !) in a small condition. Try a few combinations and log the result.

let v1 = 12;
let v2 = 34;
let v3 = 56;

(v1 < v2) && (v2 < v3) ? console.log(true): console.log(false);
(v1 > v2) || (v2 < v3) ? console.log(true): console.log(false);
(!v1 > v2) && (v2 > !v3) ? console.log(true): console.log(false);
(v1 > !v2) || (!v2 < v3) ? console.log(true): console.log(false);

// 31: Use the ternary operator to check if a number is even or odd.

let v4 = 23;
(v4 % 2 === 0) ?  console.log('even'): console.log('odd');


// 🟢 4. Control Flow

// 32: Write an if/else block that checks if a number is positive, negative, or zero.

let v5 = -45;

if (v5 === 0) {
    console.log('Zero')
} else if (v5 > 0) {
    console.log('Positive Number')
} else {
    console.log('Negative Number')
}

// 33: Write a switch statement to print day name based on number (1-7). If input is 5, it should print Friday.

number = 9;

switch (6) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

// 34: What happens if none of the switch cases match? Add a default case.

    default:
        console.log("Invalid number input");
        break;
}


// 🟢 5. Loops

// 35: Print numbers from 1 to 10 using a for loop.

for (let i = 1; i<11; i++) {
    console.log(i);
}

// 36: Print numbers from 10 to 1 using a while loop.

let j = 10;
while (j>0) {
    
    console.log(j);
    j--;
}

// 37: Write a do-while loop that runs at least once even if the condition is false.

let result1 = '';
let k = 0;

do {
    k += 2;
    result1 += k;
} while (k<6);

console.log(result1);


// 🟢 6. Functions

// 38: Write a function that takes two numbers and returns their sum.

function submition(val1 = 0, val2 = 0) {
    return val1 + val2;
}

console.log(submition(2, 3))

// 39: Write a function expression that checks if a number is even.

function state(val3) {
    (val3%2 === 0) ? console.log('even'): console.log('odd');
}

state(4)

// 40: Convert the above function to an arrow function.

const isArrow = (val4) => {
    console.log((val4%2 === 0) ? 'even': 'odd');
}

isArrow(7)

// 41: Create a function with no return value – it just logs "Hello JS Learner".

let message01 = "Hello JS Learner."
let fnc01 = () => {
    console.log(message01);
}

fnc01();

// 42: Create a function inside another function and log a variable from the outer function. What is this called?

function fnc02() {
    let val6 = 999;

    function fnc03() {
        console.log(val6);
    }

    fnc03();
}

fnc02();


// ✅ 43. Declare an array named `colors` with three color names. Log the array.

let colors = ['Red', 'Blue', 'Green'];

// ✅ 44. Add a color at the end and at the beginning of the `colors` array using push() and unshift(). Then log the array.

colors.push('Yellow');

// ✅ 45. Remove the last and first element from the `colors` array using pop() and shift(). Log the updated array.

colors.pop();
colors.shift();

// ✅ 46. Use a for loop to print all elements of an array called `fruits = ['apple', 'banana', 'mango']`.

const fruits = ['apple', 'banana', 'mango'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// ✅ 47. Use a for-of loop to print each fruit in the `fruits` array.

for (let fruit of fruits) {
    console.log(fruit);
}

// ✅ 48. Create a nested array called `matrix` (3x3) and log the middle value.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][2])

// ✅ 49. Create an object `person` with properties: name, age, and city. Log each property individually.

let person = {
    name: 'Bilal',
    age: 21,
    city: 'Islamabad'
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

// ✅ 50. Add a new property `profession` to the `person` object and update the `city` property. Then log the object.

person.profession = 'Web Dev';

console.log(person.profession)

// ✅ 51. Write a function `printKeys(obj)` that takes an object and prints all its keys using a loop.

function printKeys(obj) {
  const keys = Object.keys(obj);
  keys.forEach(key => {
    console.log(key);
  });
}

let personDetails = {
    name: 'Bilal',
    city: 'Islamabad',
    age: 21
};

printKeys(personDetails);

// ✅ 52. Create an array of objects called `students`, each with name and score. Write a loop to print names of students with score > 80.

let students = [
    {name: 'Asad', score: 56},
    {name: 'Danish', score: 82},
    {name: 'Zain', score: 61},
    {name: 'Bilal', score: 91},
    {name: 'Farhan', score: 72}
];

for (const detail of students) {
    if (detail?.score > 80) {
        console.log(detail)
    }
}


// ✅ 53. Use `map()` to create a new array from `numbers = [1, 2, 3, 4]` where each number is squared.

let numbers = [1, 2, 3, 4];
let newNumber = numbers.map(function(val) {
    return  val * val;
});

console.log(newNumber)

// ✅ 54. Use `filter()` to extract only even numbers from an array: [10, 15, 20, 25, 30].

let arr1 = [10, 15, 20, 25, 30];

const newArr1 = arr1.filter(function(val) {
    return val % 2 === 0;
});

console.log(newArr1);

// ✅ 55. Use `reduce()` to calculate the sum of all numbers in an array: [5, 10, 15, 20].

let arr2 = [5, 10, 15, 20];
const newArr2 = arr2.reduce(function(acc, val) {
    return acc + val ;
});

console.log(newArr2)

// ✅ 56. Create an array of strings: ['apple', 'banana', 'cherry']
// Use `map()` to convert each string to uppercase and log the new array.

const fruits1 = ['apple', 'banana', 'cherry'];

let newFruits1 = fruits1.map(function(val) {
    return val.toUpperCase();
});

console.log(newFruits1);

// ✅ 57. You have an array of users:
// const users = [ {name: 'Ali', age: 25}, {name: 'Sara', age: 17}, {name: 'Zain', age: 30} ];
// Use `filter()` to get users who are 18 or older.

const users = [ 
    {name: 'Ali', age: 25},
    {name: 'Sara', age: 17},
    {name: 'Zain', age: 30} 
];

const newUsers1 = users.filter(function(val) {
    return val.age >= 18;
});

console.log(newUsers1);

// ✅ 58. Use `map()` to return only the names from the users array in Q5.

const newUsers2 = users.map(function(val) {
    return val.name;
});

console.log(newUsers2);

// ✅ 59. Use `reduce()` to calculate the total age of all users in Q5.

const newUser3 = users.reduce(function(acc, val) {
    return acc + val.age;
}, 0);

console.log(newUser3);

// ✅ 60. Use `Object.keys()` and `Object.values()` to print all keys and values of the following object:
// const person = { name: "Aisha", age: 22, city: "Lahore" };

const person = { name: "Aisha", age: 22, city: "Lahore" };

const keys = Object.keys(person);
const values = Object.values(person);

console.log("Keys:", keys);
console.log("Values:", values);


// ✅ 61. Use `Object.entries()` on the `person` object above and print key-value pairs using a `for...of` loop.

const entries = Object.entries(person);

for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

// ✅ 62. From an array of products like this:
// const products = [ {name: 'pen', price: 10}, {name: 'notebook', price: 40}, {name: 'eraser', price: 5} ];
// Use `filter()` to get only products under Rs. 20, then use `map()` to return just their names.

const products = [
  {name: 'pen', price: 10},
  {name: 'notebook', price: 40},
  {name: 'eraser', price: 5}
];

const filteredProducts = products.filter(product => product.price < 20);
const productNames = filteredProducts.map(product => product.name);

console.log(productNames);



// 🟢 7. Arrays

// 63: What is the difference between `push()` and `unshift()`? What do they return?

let arr = [1, 2];

arr.push(3);      // arr = [1, 2, 3]
arr.unshift(0);   // arr = [0, 1, 2, 3]


// 64: How are arrays in JavaScript different from arrays in other languages like C/C++?

let arr4 = [1, "hello", true]; // valid in JS, not in C/C++

// 65: What is the index of the first and last element in an array? How can we access them?

let arr5 = ['a', 'b', 'c'];

console.log(arr[0]);             // 'a' → first element
console.log(arr[arr.length - 1]); // 'c' → last element



// 🟢 8. Objects

// 66: What are the two main ways to access object properties? Give an example of each.

const user = { name: "Ali", age: 25 };

console.log(user.name);        // Dot notation
console.log(user["age"]);      // Bracket notation

// 67: What is the difference between an object created with `{}` vs. one created with `new Object()`?

let obj1 = {};                 // preferred
let obj2 = new Object();       // same effect, longer syntax


// 68: What happens if you try to access a property that doesn’t exist in an object? What does it return?

let user4 = { name: "Sara" };

console.log(user4.age); // undefined, because `age` doesn't exist