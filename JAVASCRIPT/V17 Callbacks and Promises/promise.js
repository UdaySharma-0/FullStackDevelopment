console.log('hello');

//Promises means promise of code execution

let prom1 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        reject("You were rejected and can't access")
    } else {
        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Case Resolved!")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        reject("You were rejected and can't access 2")
    } else {
        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("Case Resolved! 2")
        }, 1000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

//these are 6 promise static method
//.all([]) will return an array if both proms are resolved
// let prom3 = Promise.all([prom1, prom2])

// prom3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

//.allsettled([]) will return an array of status and value, if both proms are settled(either resolved or rejected)
// let prom3 = Promise.allSettled([prom1, prom2])

// prom3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let prom3 = Promise.race([prom1, prom2])

prom3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})