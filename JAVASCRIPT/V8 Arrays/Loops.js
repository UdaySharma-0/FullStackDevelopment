let array = [1, 3, 5, 7, 88]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element); 
// }

// array.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })

// array.forEach(element => {
//     console.log(element);
    
// });

//for in loop

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element, key);
        
    }
}

//for of

for (const element of array) {
    console.log(element);
    
}

//map


// let newArray =[]
// for (const element of array) {
//     newArray.push(element**2);
// }
// console.log(newArray);

let newArr =array.map((e, index, array)=>{
    return e**2
})

console.log(newArr);

const greaterThanSeven = (e) =>{
    if (e>7) {
        return true
    } else {
        return false
    }
}

console.log(newArr.filter(greaterThanSeven));


//Reduce Function

let arr2 = [1, 2, 3, 4, 5]

const red = (a, b)=>{
    return a*b
}

console.log(arr2.reduce(red));

//Array from

let arr3 = Array.from("Harry")
console.log(arr3);



