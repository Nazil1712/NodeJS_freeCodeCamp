const express = require('express')
const app = express()
const {people}  =require('./data.js')


app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, maalPani:people})
})

// Not updating original array(data) but just displaying 
app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const p = people.find((v,i,arr)=>v.id===Number(id))
    
    if(!p){
        return res.status(404).json({sucess:false, desc:`Person with id ${id} doesn't exist`})
    }
    let newPeople = people.filter((v,i,arr)=>v.id!=id)

    res.status(200).json({sucess:true, maalPani:newPeople})
})


app.listen(3000,()=>console.log("Listening on the server 3000...."))