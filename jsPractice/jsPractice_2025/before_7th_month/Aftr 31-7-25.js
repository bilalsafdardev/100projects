// 1. Print numbers from 1 to 100 using a loop.

let i1 = 0;
const arr1 = [];
while(i1<100) {
    i1++;
    arr1.push(i1);
};
console.log(arr1);


// 2. Print even numbers from 1 to 50.

const arr2 = [];
for (let i2 = 1; i2<51; i2++) {
    if(i2%2 === 0) {
        arr2.push(i2);
    }
};

console.log(arr2);

// 3. Calculate the sum of numbers from 1 to n (where n is any positive integer).

function sum1(n) {
    let sum = 0;
    for (let i3 = 0; i3 <= n; i3++) {
        sum += i3;
    }
    return sum;
};

console.log(sum1(8));

// *** 4. Find the factorial of a number.

console.log(factorial(6));

function factorial(n = 0) {
    let result = n;
    for(let i4 = (n - 1); i4 >= 1; i4--) {
        result *= i4;
    }
    return result;
};

// 5. Reverse a string without using built-in reverse methods.

const str = 'APPLE';
const reversed = reversedStr(str);

console.log(reversed);

function reversedStr(str) {
    let reversed = '';

    for (const everyAlphabet of str) {
        reversed = everyAlphabet + reversed;
    }
    return reversed;
}

// *** 6. Check whether a string is a palindrome (e.g., "madam", "racecar").

const toBeChanged = 'racecar';

function palindrome(character) {
    let alphabets = '';
    
    for (let i = 0; i < character.length; i++) {
        alphabets = character[i] + alphabets
    }

    return (alphabets === toBeChanged)? console.log(`${toBeChanged} is a Palindrome. `):console.log(`${toBeChanged} is not a Palindrome. `) ; 
};

palindrome(toBeChanged);

// *** 7. Count the number of vowels in a given string.

const text = 'Application';

function countVowels(text) {
    const baseVowels = ['a', 'e', 'i', 'o', 'u'];
    const chars = text.toLowerCase().split('');
    function countVowelCharacters(arr, base) {
        return arr.filter(char => base.includes(char)).length;
    }

    return countVowelCharacters(chars, baseVowels);
}

const count = countVowels(text);
console.log(count);

// 8. Count the number of digits in a number.

function cntDgt(number) {
    return String(Math.abs(number)).length;
}

console.log(cntDgt(-4772));

// 9. Find the maximum number in an array.

const numbers = [13, 3, 43, 54, 5, 3];

console.log(Math.max(...numbers))

// 10. Find the minimum number in an array.

console.log(Math.min(...numbers))

// 11. Find the second largest number in an array.

const number1 = [13, 21, 3, 8, 17];
let secondLargest = number1.sort((a, b) => a - b);
let ans = secondLargest[secondLargest.length - 2];
console.log(ans)

// *** 12. Remove duplicates from an array (without using Set).

const values = [1, 3, 44, 3, 6, 98, 44];
let newValues = values.reduce((unique, val) => {
    if(!unique.includes(val)) {
        unique.push(val)
    }
    return unique;
}, []);

console.log(newValues);

// 13. Calculate the average of numbers in an array.

let newVal = numbers.reduce((newVal, val) => newVal + val, 0);
const average = newVal / numbers.length;

console.log(average)

// *** 14. Check if a number is prime.

function checkPrime(num) {

    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(checkPrime(601));

// *** 15. Generate the first n numbers in the Fibonacci sequence.

console.log(calFabonacci(7))

function calFabonacci(n) {
    let fibonacci = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

// 16. Create a function that returns the number of times a character appears in a string.

function charCount(str) {
  const result = {};

  for (const char of str.toLowerCase()) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log(charCount('Apple & Mango'));

// 17. Find the sum of digits of a number.

const number2 = 1380;
const toArray = number2.toString().split('').map(Number);
console.log(toArray);
const summition = toArray.reduce((acc, val) => acc + val, 0);
console.log(summition)

// 18. Create a function that converts Celsius to Fahrenheit.

console.log(cToF(12));

function cToF(c) {
    let f = (c * 9/5) + 32;
    return f;
}

// 19. Create a function to check if a year is a leap year.

console.log(leapYear(1988));

function leapYear(yr) {
    if (yr % 4 === 0) {

        if (yr % 100 !== 0 || yr % 400 === 0) {
            return `${yr} is a Leap Year.`;
        }
    }
    return `${yr} is not a Leap Year.`;
}

// 20. Swap two variables without using a third variable.

let a = 12;
let b = 4;

[a, b] = [b, a];

console.log(a);
console.log(b);

// *** 21. Check if two strings are anagrams (same letters, different order).

function areAnagrams(str1, str2) {
    
    const normalizeString = (str) => {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    };

    const cleanedStr1 = normalizeString(str1);
    const cleanedStr2 = normalizeString(str2);

    if (cleanedStr1.length !== cleanedStr2.length) {
        return `${str1} & ${str2}, both are not Anagrams of each other.`;
    }

    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        return `${str1} & ${str2}, both are Anagrams of each other.`;
    } else {
        return `${str1} & ${str2}, both are not Anagrams of each other.`; // ✅ Important!
    }
}

console.log(areAnagrams('Listen', 'Silent'));

// 22. Flatten a nested array (e.g., [1, [2, 3], [4, [5]]] => [1, 2, 3, 4, 5]).

const nestedArray = [1, [2, 3], [4, [5]]];
const flatArray = nestedArray.flat(2);

console.log(flatArray);

// 23. Capitalize the first letter of each word in a string.

const nonCap = 'bilal';
const firstCap = nonCap.charAt(0).toUpperCase() + nonCap.slice(1)

console.log(firstCap);

// 24. Create a function that returns true if a number is a power of two.

function checkPower(val) {

    return val > 0 && (val & (val - 1)) === 0;
}
console.log(checkPower(4));



// REAL-WORLD SCENERIOS

// 1. Create a function that takes a user's age and returns whether they are a minor, adult, or senior.

// 2. Write code that toggles a dark/light mode variable between "dark" and "light".

// 3. Create a function that takes a price and discount percentage, and returns the discounted price.

// 4. Simulate a basic login by checking if entered username and password match stored ones.

// 5. Write a function that converts a string like "john doe" to "John Doe".

// 6. Create a todo list array and implement functions to add, remove, and list items.

// 7. Create a function that validates an email format (basic check for "@" and ".").

// 8. Simulate a cart system: add item (name, price), remove item, calculate total.

// 9. Create a simple temperature converter (input in Celsius or Fahrenheit, output the other).

// 10. Build a digital clock that logs the current time every second using setInterval.

// 11. Create a countdown timer function that logs numbers from n to 0 every second.

// 12. Simulate form validation: check if fields like name, email, and password are not empty.

// 13. Create a grade calculator: take marks in 5 subjects, return average and grade (A, B, etc).

// 14. Simulate a simple quiz app: store questions and check if user answers correctly.

// 15. Create a character limit counter for a text input field (e.g., 200 characters left).

// 16. Build a search filter function: given a list of strings, return those that match a search query.

// 17. Simulate a bank account: deposit, withdraw, and check balance functions.

// 18. Create a function that calculates shipping cost based on weight and destination.

// 19. Create a contact form object with name, phone, email — validate fields before saving.

// 20. Create a basic random password generator with given length and allowed characters.
