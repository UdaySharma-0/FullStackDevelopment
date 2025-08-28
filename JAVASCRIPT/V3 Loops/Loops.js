console.log("I am tutorial")

let a = 1
console.log(a);
console.log(a+1);

for (let i = 0; i < 100; i++) {
    console.log(a + i); 
}

//forin loop

let obj = {
    name : "Uday",
    role : "Programmer",
    company : "AI with Uday"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element);
    
    // if (Object.prototype.hasOwnProperty.call(obj, key)) {
    // }
}

//forof Loop
for (const element of 'Uday') {
    console.log(element);
    
}


//While Loop

let i = 5;
while (i<10) {
    console.log(i);
    i++
}


//do while Loop
 
i = 10
do{
    console.log(i);
    i++
}while(i<5)

//Exercise

//Q1

obj ={
    Harry:94,
    Uday:83,
    Abishek:43
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log("Marks:" + element);
        
    }
}

//Q2

for (let i = 0; i < Object.value(obj).length; i++) {
    const element = obj[i];
    
}