console.log('Uday is a developer'); //synchronous functions
console.log('Nitin is a developer');

//Below is the example of javascript Asynchronous nature
//Async Function are always run after the whole script
setTimeout(() => {
    console.log("I'm inside a async funt");
}, 2000);
//Even your given time is zero
setTimeout(() => {
    console.log("I'm inside a async funt2");
}, 0);
console.log('the end');


const fn = (e)=>{
    console.log('this is fn')
}
const callback = (arg, fn) => {
    console.log(arg);
    fn('yadi')

}

const loadScript = (src, callback) => {
    let sc = document.createElement('script')
    sc.src = src
    sc.onload = callback("Uday", fn)
    document.head.append(sc)

}
 
loadScript("./../V4 Functions/Functions.js", callback)