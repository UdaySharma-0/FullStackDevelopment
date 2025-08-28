function greet(name) {
    console.log(`Hello ${name}! You are nice`);
    return
}

// greet("Uday")
console.log(sum(9, 9));
console.log(sum(9, 9, 6));

function sum(a, b, c = 3){
    // console.log(a+b);
    return a+b+c;
}

//Arrow Function

const func1 = (num)=>{
    console.log("I m an arrow function", num);    
}

func1(34)