// Initialize 'i' to 10 for the first loop
let i = 10;

// Use a do-while loop to display numbers from 10 to 5
do {
  console.log(i);
  i--;
} while (i >= 5);

// -------------------------

// Initialize 'j' to 1 for the second loop
for (let j = 1; j <= 4; j++) {
  // Check if 'j' is odd and display it
  if (j % 2 !== 0) {
    console.log(j);
  }
}

// -------------------------

// Read two numbers from the keyboard and display all numbers between them using a for loop
const num1 = 12;
const num2 = 20;

if (num1 <= num2) {
  // Loop from 'num1' to 'num2' and display each number
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
} else {
  // Loop from 'num2' to 'num1' and display each number
  for (let i = num2; i <= num1; i++) {
    console.log(i);
  }
}

// -------------------------

// Read a string from the keyboard and count the number of vowels using a for loop and a condition to determine if a character is a vowel
const inputString = 'testerman';
let vowelCount = 0;

// Iterate through the characters in the input string
for (let i = 0; i < inputString.length; i++) {
  const char = inputString[i];
  // Check if 'char' is a vowel and increment 'vowelCount'
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowelCount++;
  }
}

console.log(`Number of vowels in the string: ${vowelCount}`);

// -------------------------

// Read a number from the keyboard and display the multiplication table for that number using a for loop
const number = 2;

// Loop from 1 to 10 and display the multiplication results
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}

// -------------------------
