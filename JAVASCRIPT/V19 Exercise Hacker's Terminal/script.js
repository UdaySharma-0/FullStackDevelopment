let text = ["Initialized Hacking", "Reading your files", ' Password files Detected', 'Sending all passwords and personal files to server', 'Cleaning up']

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + (6 * Math.random())
        console.log(timeout);
        setTimeout(() => {
            resolve()
        }, timeout * 500);
    })
}
const threatMessage = async (message) => {
    await randomDelay()
    let boxMessage = document.createElement('div')
    boxMessage.innerHTML = message
    boxMessage.setAttribute('id', 'box')
    document.getElementsByClassName('container')[0].insertAdjacentElement('beforeend', boxMessage)
    console.log(message);
}

async function main() {

    // dotblinking funct
    
    
    setInterval(() => {
        let i = 0
        let last = document.lastElementChild
        if (last.innerHTML.endsWith('...')) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        } else {
            last.innerHTML = last.innerHTML + '.'
        }
        i++
    }, 100);
    
    for (const messages of text) {
        await threatMessage(messages)
    }
}

main()

