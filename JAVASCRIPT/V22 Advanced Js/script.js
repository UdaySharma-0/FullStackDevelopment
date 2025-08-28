//IIFE is a funct that runs as soon as possible without calling it 


(async function main() { 
    console.log(car);
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);

    let [x, y] = [1, 5, 7]
    console.log(x, y);
    [x, y, ...rest] = [1, 5, 7, 'eo']
    console.log(x, y, rest);

    let obj= {
        a:1,
        b:2,
        c:3
    }

    const {p, q} = obj
    console.log(obj);
    
    let arr = [1,4, 5, 2]
    // console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr)); //here ... is a spread opertor that spread any iterable object

    let obj2 = {...arr}
    console.log(obj2);
    const c = {x, y}
    console.log(c);
    

    //Hoisting basically is a process where all variable declared with keyword var will be declared at the top i.e. can be used before declaration but values cannot be assigned in it before declaration
    var car = 'bmw' // consoling at the top but do not throw error just say undefined
})()


const sleep= async()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c
}