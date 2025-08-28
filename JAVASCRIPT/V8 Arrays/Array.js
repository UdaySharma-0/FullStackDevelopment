const fruits = ["banana", 1, 2, 4, 5, 5]

console.log(fruits , typeof fruits);
console.log(fruits.length);

console.log(fruits[0]);

for (let index = 0; index < fruits.length; index+=2) {
    const element = fruits[index];
    console.log(element);

}


//Functions

console.log(fruits.toString());

console.log(fruits.join(' and '))


fruits.pop()
console.log(fruits);

fruits.push('Bablu')
console.log(fruits);

//shift is brother of pop
fruits.shift()
console.log(fruits);

//shift is brother of push
fruits.unshift('Mango')
console.log(fruits);

//deleting
delete fruits[4]
console.log(fruits);

animals = ['Dog', 'Cat', 'Giraffe']
CombinedArr = []

Concatearr = CombinedArr.concat(animals, fruits)
console.log(Concatearr);

//Sort Method
let sortedfruits = fruits.sort()
console.log(sortedfruits);

//Splice
let num = [1, 2,3,4, 5]
num.splice(2, 1, 22, 23)
//   splice(Position to add, no. of element to remove, Elements to be added)
console.log(num);

//Slice
let num1 = [1, 2, 3, 4] 
let slicearr = num1.slice(1, 3)
console.log(slicearr);

//Reverse
num1 = num1.reverse()
console.log(num1);









