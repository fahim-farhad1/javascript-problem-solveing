// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
function reverseString(inputString) {
  let reversedString = "";

  // Iterate through the characters of the input string in reverse order
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }

  return reversedString;
}

// Test the function
const input = "Hello, World!";
const reversed = reverseString(input);
console.log(reversed);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sumPositiveNumbers(numbersArray) {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
      sum += numbersArray[i];
    }
  }

  return sum;
}

// Test the function
const numbers = [2, -5, 10, -3, 8, -1, 7];
const positiveSum = sumPositiveNumbers(numbers);
console.log(positiveSum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  const frequencyMap = new Map();
  let maxFrequency = 0;
  let mostFrequentElement = arr[0];

  // Count the frequency of each element in the array
  for (const element of arr) {
    if (frequencyMap.has(element)) {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    } else {
      frequencyMap.set(element, 1);
    }

    // Update the most frequent element if needed
    if (frequencyMap.get(element) > maxFrequency) {
      maxFrequency = frequencyMap.get(element);
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

// Test the function
const array = [1, 2, 3, 2, 2, 4, 5, 3, 2];
const mostFrequent = findMostFrequentElement(array);
console.log("Most frequent element:", mostFrequent);

//   Task 4:  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator. Please use one of: +, -, *, /");
  }

  return result;
}

// Test the calculator function
const num1 = 10;
const operator = "*";
const num2 = 5;
try {
  const result = calculator(num1, operator, num2);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}

//   Task 5: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

// Example: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log("Random Password:", randomPassword);

//   Task 6: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
  const romanNumeralsMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let integer = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentRoman = romanNumeral[i];
    const currentValue = romanNumeralsMap.get(currentRoman);

    if (currentValue < prevValue) {
      integer -= currentValue;
    } else {
      integer += currentValue;
    }

    prevValue = currentValue;
  }

  return integer;
}

// Test the function
const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";
const romanNumeral3 = "LIV";
console.log(romanToInteger(romanNumeral1));
console.log(romanToInteger(romanNumeral2));
console.log(romanToInteger(romanNumeral3));

//   Task 7: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (currentNumber < smallest) {
      secondSmallest = smallest;
      smallest = currentNumber;
    } else if (currentNumber < secondSmallest && currentNumber !== smallest) {
      secondSmallest = currentNumber;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("No second smallest element found.");
  }

  return secondSmallest;
}

// Test the function
const numbersArray = [5, 2, 8, 1, 6, 4, 3];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log("Second smallest number:", secondSmallestNumber);
