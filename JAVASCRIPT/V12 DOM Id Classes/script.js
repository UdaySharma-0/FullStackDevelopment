console.log('hello world');

let bhupendrajogi = document.getElementsByClassName("box")
console.log(bhupendrajogi);

bhupendrajogi[1].style.backgroundColor = "red"

document.getElementById('redbox').style.backgroundcolor = "red"

//query selector will work on only for the first occurence of that class
document.querySelector('.box').style.backgroundColor = 'green'

//querySelectorAll will return an array of all element that contains the givenclass as param
console.log(document.querySelectorAll('.box'));

document.querySelectorAll('.box')[1].style.backgroundColor = 'green'

document.querySelectorAll('.box').forEach(e =>{
    e.style.backgroundColor = 'violet'
})

//Selection of element through tags

console.log(document.getElementsByTagName('div'));

//matches will check the element contains the id or that particular class by taking cssSelector as param

e = document.getElementsByTagName('div')

console.log(e[2].matches('.box'));
console.log(e[3].matches('#redbox'));


//closest check the parent element containing

console.log(e[3].closest('.box'));
console.log(e[3].closest('.container'));

//contains() will checks the child element in particular class

console.log(document.querySelector('.container').contains(e[3]));

console.log(document.querySelector('.container').contains(document.body));

console.log(document.querySelector('body').contains(document.body));








