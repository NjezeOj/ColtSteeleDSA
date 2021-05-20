//First Helper needed is a function that returns a number at a particular index
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
//Math.abs to get the absolute value of an integer 
//which converts a negative to a positive number

 
console.log(getDigit(12345, 1))