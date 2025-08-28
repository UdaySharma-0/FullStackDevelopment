let button = document.getElementById('btn')


//addEventListener takes two argument first event and event actions(means function)
button.addEventListener("click", ()=>{
    document.querySelector('.box').innerHTML = 'I am not a box'
    document.getElementsByClassName('box')[0].innerHTML = 'I am a box that clicked by gEBClassName'
})

button.addEventListener("dblclick", ()=>{
    document.querySelector('.box').innerHTML = 'You are good to go  '
})

//contextmenu will work on right click
button.addEventListener("contextmenu", ()=>{
    alert('dont hack us by right Click')
})

//here e is eventobject
// document.addEventListener("keydown", (e)=>{
//     console.info(e)
//     console.info(e.key, e.keyCode)
// })



