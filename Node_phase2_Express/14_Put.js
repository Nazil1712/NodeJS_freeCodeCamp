const express = require('express')
const { people } = require('./data')
const app = express()

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.use(express.json())

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    console.log(`After UPdation :- ${id} : ${name}`)
    const p = people.find((v,i,arr)=>v.id===Number(id))
    if(!p){
        return res.status(404).json({success:false, msg : `Person with id ${id} doesn't exist`})
    }
    else{
        p.name = name;
    }
    
    res.status(200).json({sucess:true, data : people})
})


app.listen(3000,()=>console.log("Listening on the server 3000....."))