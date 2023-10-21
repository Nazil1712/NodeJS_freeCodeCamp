// 1) First way to import express
const express = require('express')
const app = express()

// 2) another way to import express
// const app = require('express')()

//Home page
app.get('/',(req,res)=>{
    console.log("User hit the resource")
    res.send(`<h1>Home Page</h1>`)
})

// about page
app.get('/about',(req,res)=>{
    res.send(`<h1>About</h1>`)
})

//404
app.all('*',(req,res)=>{
    res.send(`<h1>Page not  found</h1>`)
    // res.status(404).send(`<h1>Page not  found</h1>`)
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000....`)
})
