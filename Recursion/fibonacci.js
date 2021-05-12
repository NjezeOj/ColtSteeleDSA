// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

let prev = 0;
let current = 1;
let sum = 0;
let i = 0;

function fib(num) {
    // add whatever parameters you deem necessary - good luck! 
    if (i < num - 1) { // 0 < 4, 1< 4,
        sum = prev + current;// 1 = 0 + 1, 1+ 1= 2
        prev = current;// 1 = 1, 1 = 1
        current = sum;// 1 = 1, 2 = 2
        i++;// 1, 2
        return fib(num);
    }
    else {
        return sum;//
    }
}

console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
