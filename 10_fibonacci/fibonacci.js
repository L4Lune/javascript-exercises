const fibonacci = function(n) {
    fib = ((1 / (Math.sqrt(5)))) * (((1 + Math.sqrt(5)) / 2))**n - (1 - ((Math.sqrt(5)) / 2))**n
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
