const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/',(req,res)=>{
    // res.json([{null:'hi'},{name:'susan'}])
    res.json(products)
})

app.listen(3000, ()=>{
    console.log(`Listening on the server 3000....`)
})
