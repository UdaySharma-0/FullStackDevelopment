console.log('Hello World');

/* 
Hello World

document.body.childNodes[3]
<script src=​"script.js">​</script>​

document.body.childNodes[4]
#text

document.body.childNodes[1].childNodes[1].childNodes
NodeList [text]0: textlength: 1[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

let con =document.body.childNodes[1]
undefined

con
<div class=​"container">​…​</div>​

con.firstChild
#text

con.firstElementChild
<div class=​"box">​Box1​</div>​

con.firstElementChild.style.color = "red"
'red'

con.firstElementChild.style.backgroundcolor = "aqua"
'aqua'

con.firstElementChild.style.background = "aqua"
'aqua'

*/

let con = document.body.childNodes[1]
console.log(con);

console.log(con.lastElementChild.parentElement);

console.log(document.body.firstElementChild);

console.log(document.body.firstElementChild.children);
console.log(document.body.firstElementChild.children[3]);

console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);


