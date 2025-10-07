import lodafs from "fs/promises";

let a = await lodafs.readFile('Uday2.txt')

// wirtefile

let b= await lodafs.writeFile('Uday.txt', 'This is amazing promise')
b = await lodafs.readFile('Uday.txt')
console.log(b.toString());

console.log(a.toString());