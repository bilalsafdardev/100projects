// Queestion 1

let algebra = (n1, n2) => {
    if (n1 > n2) {
        return `${n1} X ${n2} = ${n1 * n2}`
    }
    if (n1 < n2) {
        return `${n1} + ${n2} = ${n1 + n2}`
    }
    return 'Equal'
}

console.log(algebra(11, 7))


// Question 2

let arr1 = [0, 1, false, 2, '', 3];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]) {arr2.push(arr1[i])};   
}

console.log(arr2);


// Question 3

let phrase = "Bilal".toLocaleLowerCase();
let newPhr = phrase.split('');
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count1 = 0;

newPhr.forEach( e => {

    for (let i = 0; i < vowels.length; i++) {
        if (e === vowels[i]) {
            count1++;}}
    
})

console.log(count1);


// Question 4

let fizzBuzz = [];

for (let i = 1; i < 51; i++) {
    if (i%3 === 0 && i%5 === 0) {
        fizzBuzz.push('FizzBuzz');
    }
    else if (i%3 === 0) {
        fizzBuzz.push('Fizz');
    }
    else if (i%5 === 0) {
        fizzBuzz.push('Buzz');
    }
    else {fizzBuzz.push(i)} 
}

console.log(fizzBuzz);


// Question 5

let cart = [{name: 'Phone', price: 10}, {name: 'Case', price: 60}, {name: 'Charger', price: 20}]

let tPrice = 0;

cart.forEach(e => {
    tPrice += e.price;
});

tPrice > 100 ? console.log(tPrice * 0.90) : console.log(tPrice);


// Question 6

let arr3 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

arr3.forEach( e => {
    if (!uniqueArr.includes(e)) {
        uniqueArr.push(e)
    }
});

console.log(uniqueArr);


// Question 7

let marks = {
    Math: 25.1,
    Science: 52,
    English: 58,
    History: 48.4,
    Geography: 64,
    Art: 43.5,
    Computer: 60
}

let value = Object.values(marks);
let avg = 0;

function calc() {
    avg = value.reduce((acc, red) => acc + red, 0) / value.length;
    if (avg > 50) {
        return 'Pass';        
    } 
    else {return 'Fail';}

}

console.log(calc());


// Question 8

let pass = "Bilal!44";
let hasUpper = false;
let hasSpecial = false;
const spChars = "!@#$%^&*()_+[]{}|;:,.<>?";
let check = 0;

if (pass.length >= 8) {
    check++;
}
for (let i = 0; i < pass.length; i++) {

    if (!hasUpper && pass[i] === pass[i].toUpperCase() && pass[i] !== pass[i].toLowerCase()) {
        check++;
        hasUpper = true;
    }
    if (!hasSpecial && spChars.includes(pass[i])) {
        check++;
        hasSpecial = true;
    }
}

check >= 3 ? console.log('Strong Password') : console.log('Weak Password')


// Question 9

function createVault() {
    let secret = 86345;
    let data = {name: "John",
                department: "BBA",
                university: "CUST"
                }
    return {
        getData: function (pin) {
                    if (pin === secret) {
                        return data;
                    }
                    return "Access Denied!"
        }
    }
}

let myVault = createVault();
console.log(myVault.getData(12345));
console.log(myVault.getData(86345));


// Question 10

function once(fn) {
    let flag = false;

    return function() {
        if (!flag) {
            flag = true;
            return fn();
        }
        return undefined;
    }
}

let readyNow = once(function(){
    console.log('Executed Once!');
})

readyNow();
readyNow();


// Question 11

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') return "Error: Invalid Input."
    if (operation === 'addition') return a + b;
    if (operation === 'subtract') return a - b;
    if (operation === 'multiply') return a * b;
    if (operation === 'divide' && b === 0) return "Infinity";
    if (operation === 'divide') return a / b;
}

console.log(calculate(2, 0, 'divide'));


// Question 12

function makeMultiplier(margin) {
    return function(e) {
        return e * margin;
    }
}

let triple = makeMultiplier(3);
console.log(triple(4));

let double = makeMultiplier(2);
console.log(double(5));


// Question 13

function createToggler() {
    let status = true;
    
    return function() {
        status = !status;
        return status;
    }
}

let switcher = createToggler();

console.log(switcher());
console.log(switcher());
console.log(switcher());


// Question 14

let score = [45, 85, 10, 80, 100];
let firstHighest = 0;
let secondHighest = 0;

for (let i = 0; i < score.length; i++) {
    let current = score[i];

    if (current > firstHighest) {
        secondHighest = firstHighest;
        firstHighest = current;
    }
    if (current > secondHighest && current < firstHighest) {
        secondHighest = current;
    }
}

console.log(`The second highest score is ${secondHighest}`);


// Question 15

let str1 = "Twelve plus one";
let setting1 = str1?.toLowerCase()?.replaceAll( ' ', '');
let str2 = "Eleven plus two";
let setting2 = str2?.toLowerCase()?.replaceAll( ' ', '');

let sorted1 = setting1.split('').sort().join('');
let sorted2 = setting2.split('').sort().join('');

sorted1 === sorted2 ? console.log(`'${str1}' & '${str2}' are Anagrams of each other`) : console.log(`'${str1}' & '${str2}' are not Anagrams of each other`);


// Queestion 16

let letter = "apple";
let alphabet = {};

for (let char of letter) {
    
    alphabet[char] = (alphabet[char] || 0) + 1;
}

console.log(alphabet);


// Question 17

function flatten(nestArr) {
    let flatArr = [];

    for (let item of nestArr) {
        if (Array.isArray(item)) {
            flatArr = flatArr.concat(flatten(item));
        } else {
            flatArr.push(item);
        }
    }
    return flatArr;
}

console.log(flatten([1, [2, 3], [[4, 5, [6]]]]));


// Question 18

