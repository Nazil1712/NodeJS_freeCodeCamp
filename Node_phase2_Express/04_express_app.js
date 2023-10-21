const express = require('express')
const app = express()
const path = require('path')

// 1)
// set up static and middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./navbar-app/index.html'))
    // or
    // res.sendFile(path.join(__dirname,'navbar-app','index.html'))
})


// 2)
/* app.use(express.static(__dirname+'/public'))

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Page not found </h1>`)
}) */

app.listen(3000,()=>{
    console.log(`Listening on the server 3000....`)
})