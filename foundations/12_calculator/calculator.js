const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  return arr.reduce((total, num) => total + num, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
  let result = num;
	if (num === 0) {
    return 1
  } else {
    for (let i = num; i > 1; i--) {
      result *= i-1;
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
