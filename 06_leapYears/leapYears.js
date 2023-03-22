const leapYears = function(year) {
// it is a leap year if:
// 1. year is divisible by 4 (year % 4 == 0)
// 2. year is divisible by 400 and 100(year % 400 == 0)
if ((year % 400 == 0) && (year % 100 == 0)) {
    return true;
} else if ((year % 4 == 0) && (year % 100 !== 0)) {
    return true;
} else return false;
}
// Do not edit below this line
module.exports = leapYears;