const { error } = require("console");
const fs = require("fs")

// console.log(fs);

console.log('Starting');

//This is work for sync
fs.writeFileSync("Uday.txt", "Uday is a developer")

//this will work for async // Use for best result because if you have read file after open this can create problem if we 
// dont not using async funct 
fs.writeFile("Uday2.txt", "Uday is nice develper", () => {
    console.log('done');
    fs.readFile('Uday2.txt', (error, data) => {
        console.log(error);
        console.log(data);
    })
})

//Callback Hell -->

// fs.writeFile("Uday2.txt", "Uday is nice develper", () => {
//     console.log('done');
//     fs.readFile('Uday2.txt', (error, data) => {
//         console.log(error);
//         console.log(data);
//         //again
//         fs.writeFile("Uday2.txt", "Uday is nice develper", () => {
//             console.log('done');
//             fs.readFile('Uday2.txt', (error, data) => {
//                 console.log(error);
//                 console.log(data);
//                 //again
//                 fs.writeFile("Uday2.txt", "Uday is nice develper", () => {
//                     console.log('done');
//                     fs.readFile('Uday2.txt', (error, data) => {
//                         console.log(error);
//                         console.log(data);
//                         //again
//                         fs.writeFile("Uday2.txt", "Uday is nice develper", () => {
//                             console.log('done');
//                             fs.readFile('Uday2.txt', (error, data) => {
//                                 console.log(error);
//                                 console.log(data);
//                                 //again
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })



// to append data in file async
fs.appendFile('Uday2.txt', 'appended data', (e, d) => {
    console.log(d);
})

console.log('ending');
