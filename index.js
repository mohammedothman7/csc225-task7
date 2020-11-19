// Task 7

// write a function that takes the input string and reverses it
function reverseThisString(string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString + string[i];
  }
  return reverseString;
}

console.log(reverseThisString("Hello"));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
function swapCase(string) {
  return string.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) => {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
}

console.log(swapCase("Hello World"));

//convert array of numbers from farenheit to celcius
function toCelcius(array) {
  let celcius = [];
  array.map((temp) => {
    celcius.push((temp - 32) * (5 / 9));
  });
  return celcius;
}

console.log(toCelcius([23, 32, 41, 50, 59]));

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
function passOrFail(array) {
  return array.map((grade) => {
    if (grade >= 75) {
      return true;
    } else {
      return false;
    }
  });
}

console.log(passOrFail([20, 30, 50, 80, 90, 100]));

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
function germanNumbers() {
  const cardinalNumbers = [2, 3, 4, 5, 6];
  const germanNumbers = ["zwei", "drei", "vier", "fünf", "sechs"];

  let array = [];

  for (let i = 0; i < cardinalNumbers.length; i++) {
    array.push(`${cardinalNumbers[i]} is ${germanNumbers[i]}`);
  }

  return array;
}

console.log(germanNumbers());

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example:
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const primeNumbers = [2, 3, 5, 7, 11, 13];

  return numbers.filter((number) => primeNumbers.includes(number));
}

console.log(returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT"
function multipleOfThree() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("CSC225 RULES I LOVE JAVASCRIPT");
    } else if (i % 3 == 0) {
      console.log("CSC225 RULES");
    } else if (i % 5 == 0) {
      console.log("I LOVE JAVASCRIPT");
    } else {
      console.log(i);
    }
  }
}

multipleOfThree();
