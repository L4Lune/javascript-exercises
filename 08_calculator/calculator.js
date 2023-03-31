const add = function(a, b) {
    let sum = a + b;
    return sum;
};

const subtract = function(a, b) {
	let diff = a - b;
  return diff;
};

const sum = function(array) {
  const initialValue = 0;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue)
  return sum;
};

const multiply = function(array) {
  const initialValue = 1;
  const product = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue
  )
  return product;
};

const power = function(a, b) {
	let pow = a ** b;
  return pow;
};

const factorial = function(n) {
	let fact = 1; 
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
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
