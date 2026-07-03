// Write an arrow function to check whether a number is Odd or Even.
// Return "Even" if the number is even.
// Return "Odd" if the number is odd.

// Example:
// checkOddEven(8) ? "Even"
// checkOddEven(5) ? "Odd"
const checkOddEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

let number = 15;
console.log(number + " is " + checkOddEven(number) + " Number");

module.exports = checkOddEven;
