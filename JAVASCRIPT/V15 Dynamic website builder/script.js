console.log('lets start');

let container = document.querySelector('.container')

function createCard(title, chnlName, views, upldTime, duration, thumbnail) {
    console.log('hi');
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', thumbnail)
    img.setAttribute('style', 'width:178px; border-radius:10px; margin:0px 0px 0px 12px;')
    div.setAttribute('style', 'background-Color:#e5e3e152; padding:10px 0px; border-radius:10px; width:80vw; margin: 8px auto; height:100px; display:flex; gap:0px 45px')
    // div.setAttribute('style', )
    container.insertAdjacentElement('afterbegin', div)
    div.insertAdjacentElement('afterbegin', img)
    let titlePara = document.createElement('p')
    titlePara.innerHTML = title + '<br><p id="chnlname">'
    titlePara.setAttribute('style', 'font-family:"Roboto","Arial",sans-serif; font-weight:600; margin-bottom:8px; cursor:pointer')
    div.insertAdjacentElement('beforeend', titlePara)
    let chnlPara = document.getElementById('chnlname')
    views = convertViews(views)
    upldTime = StandardTime(upldTime)
    chnlPara.innerHTML = chnlName + `<div>•  ${views}</div` + `<div> • ${upldTime}`
    chnlPara.setAttribute('style', 'font-size:.7em; font-weight:200; display:flex; gap:0px 5px; color:#606060')
    let durationBox = document.createElement('div')
    durationBox.innerHTML = duration
    durationBox.setAttribute('class', 'duration')
    durationBox.setAttribute('style', 'padding: 2px; height: 13px;color: white;position: relative;right: 50%;top: 75px;font-size: .8em;border-radius: 5px;background-color: rgb(8 8 8 / 70%);')
    div.insertAdjacentElement('beforeend', durationBox)
}

function convertViews(views) {
    if (views <= 999) {
        return views
    }
    else if (views > 999 && views <= 999999) {
        views = views.toString()
        return (views.slice(0, -3) + 'K')
    } else if (views > 999999) {
        views = views.toString()
        return (views.slice(0, -6) + 'M')
    }
}

function StandardTime(upldTime) {
    if (upldTime <= 11) {
        return (upldTime + ' months ago')
    } else if (upldTime > 11) {
        upldTime = (upldTime / 12).toPrecision()
        if (upldTime == 1) {
            return (upldTime + ' year ago')
        } else {
            return (upldTime + ' years ago')
        }
    }
}

createCard("Introduction to Backend | Sigma Web dev Course #34", "Code with Harry", 23000, 9, '26:34', 'https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq_FaK-_G-qXzjaCe2dSVzROtBbw')
createCard("Introduction to Backend | Sigma Web dev Course #34", "Code with Harry", 23000, 48, '26:34', 'https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq_FaK-_G-qXzjaCe2dSVzROtBbw')
createCard("Introduction to Backend | Sigma Web dev Course #34", "Code with Harry", 23000, 9, '26:34', 'https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq_FaK-_G-qXzjaCe2dSVzROtBbw')
createCard("Introduction to Backend | Sigma Web dev Course #34", "Code with Harry", 23000, 9, '26:34', 'https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq_FaK-_G-qXzjaCe2dSVzROtBbw')
createCard("Introduction to Backend | Sigma Web dev Course #34", "Code with Harry", 23000, 12, '26:34', 'https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq_FaK-_G-qXzjaCe2dSVzROtBbw')
