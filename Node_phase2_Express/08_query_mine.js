const express = require('express')
const app = express()
const data = require('./data')



app.get('/',(req,res)=>{
    res.json(data.products)
})


app.get('/query',(req,res)=>{
    let {search, limit} = req.query

    const products = [...data.products]
    let sortedProducts = []


    if(!search && !limit){
        return res.status(404).send(`<h1>Please provide serach & limits in URL!!!`)
    }

    if(search){
        sortedProducts = products.filter((v,i,arr)=>v.name.startsWith(search))
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,limit)
    }


    if(sortedProducts.length==0){
        return res.status(404).send(`<h1>The product you are looking for doesn't exists`)
    }
    res.json(sortedProducts)
})

app.listen(3000,()=>{
    console.log("Listening on the server 3000......")
})