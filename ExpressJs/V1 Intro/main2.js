const express = require('express')
const app = express()
const port = 3000


// How to having access the files to public
// app.use('/', express.static('public'))
app.use(express.static('public'))

//Routing in express

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
  res.send('Hello about!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello blog!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello intro-to-js!')
// })

//Either you can use slug instead making many pages
app.get('/blog/:slug/:second', (req, res)=>{
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
  //Queries
  //http://localhost:3000/blog/intro/hi?mode=dark&region=in  in this url mode and region are the queries
  console.log(req.params);
  console.log(req.query);

    
})



// Starting port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
