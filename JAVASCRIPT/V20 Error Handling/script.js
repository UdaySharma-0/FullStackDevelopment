let a = prompt("Enter a number")
let b = prompt("Enter a second number")
let sum;

if (isNaN(a) || isNaN(b)) {
    // throw new Error("Input is not a number");
    throw SyntaxError("Input is not a number")

} else {
    sum = parseInt(a) + parseInt(b);
}

function main() {

    let x = 3
    try {
        console.log(sum * x);
        return true
    } catch (error) {
        console.log('Error aa gya bro');
        //there are always three properties that used to show the error
        console.log(error.name);
        // console.log(error.message);
        // console.log(error.stack);
        return false
    }

    //finally block will always run either try block run or catch block     execute
    finally {
        console.log("files are being closed and db connection is also being closed");

    }

}

let c = main()
//There are two types of error
// 1. woh jo aap user ko dikate ho throw ka use krke
// 2. woh jo aap handle krte ho try | catch ka use krke

