const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})

app.get('/products/nazil',(req,res)=>{
    console.log(req.query)
    
    // ...rest opeartor 
    let {search,limit} = req.query

    // spread opeartor
    let sortedProducts = [...products]
    if(search){
        sortedProducts = products.filter((v,i,arr)=>v.name.startsWith(search))
    }
    if(limit){
        sortedProducts = products.slice(0,Number(limit))
    }

    // if we dont't have product starts with 'specified'
    // If we are defining conditions then we have to return (must) , otherwise we will get error!
    
    if(sortedProducts.length==0){
        // return res.status(200).send(`<h2>The product you specified is not available </h2>`)
        // or
        return res.status(200).json({success:true, data:[]})
    }
    res.json(sortedProducts)
})

app.listen(3000,()=>{
    console.log(`Listening on the server 3000.....`)
})