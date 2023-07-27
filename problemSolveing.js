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
  

  