const express = require('express')
const app = express()
const {people} = require('./data')



//Get Method (Deafult method performed by browser)
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

// To insert data --> POST

app.listen(3000,()=>console.log("Listening on the server 3000......"))