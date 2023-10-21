const express = require('express')
const { people } = require('./data')
const app = express()


app.get('/',(req,res)=>{
    res.status(200).json({success:true, data:people})
})


app.listen(3000,()=>console.log("Listening ...."))