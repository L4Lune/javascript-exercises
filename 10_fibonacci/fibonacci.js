const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    } else fib = Math.round(((1 / (Math.sqrt(5)))) * (((1 + Math.sqrt(5)) / 2))**n - (1 - ((Math.sqrt(5)) / 2))**n)
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
