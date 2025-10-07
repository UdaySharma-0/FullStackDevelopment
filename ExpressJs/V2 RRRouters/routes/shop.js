const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Hello shop')
})

router.get('/about', (req, res)=>{
    res.sendFile('C:\\Uday\\Full stack development\\ExpressJs\\V2 RRRouters\\Templates\\index.html')
})

module.exports = router