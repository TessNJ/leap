"use strict";

let someYear = 2012;

function isLeapYear(number) {
  let isLeap = false;
  if (number % 100 === 0) {
    if (number % 400 === 0) {
      isLeap = true;
    }
  } else if (number % 4 === 0) {
    isLeap = true;
  }
  return isLeap;
}

console.log(`Is ${someYear} a leap year?`, isLeapYear(someYear));
console.log(`Is ${2020} a leap year?`, isLeapYear(2020));
console.log(`Is ${2019} a leap year?`, isLeapYear(2019));
console.log(`Is ${1900} a leap year?`, isLeapYear(1900));
console.log(`Is ${2000} a leap year?`, isLeapYear(2000));

/* function isWinner(animal) {
  let isLeap = false;
  if (animal.isWinner) {
    if (animal.isWinner) {
      isLeap = true;
    }
  } else if (animal.isWinner) {
    isLeap = true;
  }
  return isLeap;
}
 */
