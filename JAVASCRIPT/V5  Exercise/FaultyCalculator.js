/* Create a faulty calculator using JavaScript 

This Faulty calculator does following:
1.It takes two numbers as input from the user
2. It performs wrong opertions as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong opertion 10% of the times

*/

let a = prompt("Enter the first number")
let c = prompt("Enter the Operation")
let b = prompt("Enter the second number")

let o = {
    '+':'-',
    '*':'+',
    '-':'/',
    '/':'**'
}



if (Math.random() < 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    c = o[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
console.log(a, b);
