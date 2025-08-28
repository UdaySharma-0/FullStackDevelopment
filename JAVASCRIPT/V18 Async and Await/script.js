// async function getData(params) {
//     //Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

async function getData() {
    //Simulate getting data form a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    // let data = await x.text()


    //Data fetch using POST method
    x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
                }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    data = await x.json()
    return data
    
}
async function main() {   
    console.log('loading modules');
    
    console.log('Do something else');
    
    console.log('Load data');
    let data = await getData()
    
    
    console.log(data);
    // console.log(val);
    
    console.log('process data');
}

main()


//Example POST method implementation:
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

// data.then((val) =>{
//     console.log(data);
//     console.log(val);
    
//     console.log('process data');
// })


