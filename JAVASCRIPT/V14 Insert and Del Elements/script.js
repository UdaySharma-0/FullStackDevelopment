console.log(document.querySelector('.box'));

console.log(document.querySelector('.box').innerHTML);

//innerhtml will shows the html of given class
console.log(document.querySelector('.container').innerHTML);

//innerText will only shows the text inside given class and doesn't show any html
console.log(document.querySelector('.container').innerText);

//outer html will give .container html and inner html
console.log(document.querySelector('.container').outerHTML);

//tagName will return the tagname of class
console.log(document.querySelector('.container').tagName);

//nodename can also return commentnode or anything 
console.log(document.querySelector('.container').nodeName);

//textcontent will return text inside that class
console.log(document.querySelector('.container').textContent);

//It can HIDE the element
console.log(document.querySelector('.container').hidden);
document.querySelector('.container').hidden = true
console.log(document.querySelector('.container').hidden);
document.querySelector('.container').hidden = false

//Changing inner html
document.querySelector('.box').innerHTML = 'Hey I love You'

//Has attribute check the attribute is in or not
console.log(document.querySelector('.container').hasAttribute('style'));
//get attribute gives details of attribute
console.log(document.querySelector('.container').getAttribute('style'));

//setAttribute changes the properties of attribute
console.log(document.querySelector('.container').setAttribute('style', 'display: inline'));

console.log(document.querySelector('.container').attributes)

//Removing attribute
console.log(document.querySelector('.container').removeAttribute('style'));
console.log(document.querySelector('.container').hasAttribute('style'));

//can edit if design mode is on
document.designMode = 'on'
document.designMode = 'off'

//dataset will who created it or tell about data
console.log(document.querySelector(".box").dataset);

//Creation of new element
let div = document.createElement("div")
div.innerHTML = "I have been created"
div.setAttribute("class", "created")
// document.querySelector(".container").append(div)
document.querySelector(".container").before(div)
//some other functions to add element are .append, .insertAdjacentElement, .insertAdjacentHTML, .insertAdjacentText, .insertBefore

let cont = document.querySelector(".container") 
cont.insertAdjacentHTML('beforeend', '<b> I am under water, Please Save</b>') //befrebegin, afterend, afterbegin, beforeend
/* 
adjacentHTMl = for inserting html
adjacenttext = for inserting text
adjacentElement = for inserting element
*/

//Removing element using class name
document.querySelector(".box").remove()

//To know the classes that are added to any element
console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);

//class removing and adding
console.log(document.querySelector(".container").classList.add('uday'));
console.log(document.querySelector(".container").classList.remove('uday'));

//toggle the class, if class not added it will add or remove
document.querySelector('.container').classList.toggle('sneha')







