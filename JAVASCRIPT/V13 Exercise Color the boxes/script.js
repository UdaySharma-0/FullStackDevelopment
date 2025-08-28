let boxes = document.getElementsByClassName('box')
console.log(boxes);
// console.log(randomColor);


for (let i = 0; i < boxes.length; i++) {
    let randomColor1 = Math.random() * 222;
    let randomColor2 = Math.random() * 222;
    let randomColor3 = Math.random() * 222;
    return `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
    boxes[i].style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
}
document.title = 'Random Color box'


