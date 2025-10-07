const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const shop = require('./routes/shop')


app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res)=>{ 
    res.send('Hello World!')
    console.log('printing on the console get request');
})

// Post Request
app.post('/', (req, res)=>{
    console.log('printing on the console post request');
    res.send('Hello World post!')
})

// Put Request
app.put('/', (req, res)=>{
    console.log('printing on the console put request');
    res.send('Hello World put!')
})

//Testing Index.html
app.get("/index", (req, res)=>{
    // res.send('Hello World Index file')
    
    //Sending file
    res.sendFile('Templates/index.html', {root: __dirname})
    console.log("Printing on cosole this is index file");
})

// Just returning json data using app
app.post('/api', (req, res)=>{ 
    res.json({a:1, b:3, c:4, d:5, nam:['uday', 'jerry']})
})

//Some other funct are
/*
res.download()
res.end()
res.json()
res.jsonp()
res.redirect()
res.render()
res.send()
res.sendFile()
res.sendStatus()
*/
app.listen(port, ()=>{
    console.log("Servers started at port " , port);
})