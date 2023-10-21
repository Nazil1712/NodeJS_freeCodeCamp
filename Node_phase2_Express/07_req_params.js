const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1> <a href="/api/products">Products</a>`)
})

app.get('/api/products',(req,res)=>{
    const ans = products.map((v,i,arr)=>{
        const {id,name,image} = v;
        return {id,name,image}
    })
    res.send(ans)
})

app.get('/api/products/:productID',(req,res)=>{
    const ans = products.find((v)=> v.id == Number.parseInt(req.params.productID))
    if(!ans){
        return res.status(404).send(`<h1>Product does not exist </h1>`)
    }
    console.log(ans)
    return res.json(ans)
})

app.listen(3000,()=>{
    console.log(`Listening on the port number 3000.....`)
})