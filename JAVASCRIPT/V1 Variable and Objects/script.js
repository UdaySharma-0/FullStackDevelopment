console.log("Hey this is tutorial 55")
let number = prompt("Enter first number")

var a = 5;
var b = 6;
var c = "Harry";
// var 55a = 45; //not allowed

console.log(a+b+8)
console.log(typeof a, typeof b, typeof  c)

// const a1 = 6;
// a1 = a1 + 1;


// var is global
// const and let are block variable
{
    let a = 66;
    console.log(a)
}

let x = "Uday Sharma";
let y = 22;
let z = 3.55;
const p = true;
let r = null; // type of null is Object
console.log(x, y, z, p, r)
console.log(typeof x,typeof  y, typeof z, typeof p, typeof r)

//Objects is key value ka pair
let o = {
    name: "Harry",
    "job role": " Developers",
    isHandsome : true
}

console.log(o)
o.salary = '100crores';
console.log(o)

//Exercise

// Q1

let name = "uday"
console.log(name + 1) //Concatenation

//Q2

console.log(typeof name)

// Q3

const obj = {
    name : 'Uday bhai',
    course: 'bca'
}


console.log(obj)
obj.number = 78;

//Q4

obj.name= 'sher';
console.log(obj)


//Q5

let dictionary = {
    Selection : "Chunav",
    Search : "Dhundna",
    Infinity : "Anant",
    Castle : "Mahal",
    Demon : "Danav"
}

console.log(dictionary)