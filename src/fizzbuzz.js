"use strict";

const fizzbuzz = (value) => {
  let result = value;
  if (value % 3 == 0 && value % 5 == 0) {
    result = "FizzBuzz";
  } else if (value % 3 == 0) {
    result = "Fizz";
  } else if (value % 5 == 0) {
    result = "Buzz";
  }
  return result;
}

module.exports = fizzbuzz;
