console.log("Hello I am conditional tutorial")

let age = 4;
let grace = 2;

age = + grace
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age % grace)
console.log(age ** grace)
age = -9
if (age > 18) {
    console.log("you can drive")
}
else if (age <= 0) {
    console.log("Are you kidding")
}
else {
    console.log("You can't")
}



// Comparision Operators
// ==, ===, !=, !== > < >= <= ?

// Logical Opertors

// &&, ||, !


console.log(age > 16 ? "you can drive" : "you can't")


//Exercise

// Q1

if(age>10 && age<20){
    console.log('age is lies b/w 10 and 20')
}
else{
    console.log('age is lies b/w 10 and 20')
}

switch (true) {
    case (age>=18):
        console.log("able to drive")
        break;
    case (age<18):
        console.log("unable to drive")
        break;
        
    case (age<0):
        console.log("Are you kidding")
        break;
    default:
        console.log(age)
        break;
}

// Q3
let num = 6
if((num % 7) == 0){
    console.log('number is divisible by 3')
}else if((num % 3) == 0 || (num % 2) == 0 ){
    console.log('Number is either divisible by 2 or 3');
    
}
else{
    console.log('Not divisible')
}

// Q5

console.log(age > 16 ? "you can drive" : "you can't")
