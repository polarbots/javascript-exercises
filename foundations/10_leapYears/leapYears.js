const leapYears = function(year) {

    // Conditions:
    // Is leap year:
    // Divisible by 4 and not by 100 -> year % 4 == 0 && !(year % 100 == 0)
    if (year % 4 == 0 && !(year % 100 == 0)) return true;

    // Divisible by 4, by 100, and by 400 -> year % 4 == 0 && year % 100 == 0 && year % 400 == 0
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) return true;

    // Else return false
    return false;

    // One liner way
    // if (year % 4 == 0 && (!(year % 100 == 0)) || year % 400 == 0) return true;

};

// Do not edit below this line
module.exports = leapYears;
