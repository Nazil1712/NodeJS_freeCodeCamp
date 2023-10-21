const express = require('express')
const { people } = require('./data')
const router = express.Router()
const app = express()

// Static assets
app.use(express.static('./methods-public'))

// Parses form data (For POST method --> Regular)
app.use(express.urlencoded({extended:false}))

// Parses Json data (For POST method --> Javascript)
app.use(express.json())



// GET Request
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

// POST Request (Regular)
app.post('/login',(req,res)=>{
    let {Testing} = req.body;

    if(!Testing) {
        return res.status(401).send(`Please provide Credentials`)
    }

    else{
        res.status(200).send(`Welcome ${Testing}`)
    }
})


// POST Request (JavaScript)
app.post('/api/people',(req,res)=>{
    let {name} = req.body
    
    if(!name) {
        return res.status(400).json({success:false, msg:'Nazil bhau credentials to daalo'})
    }
    /* 
    The 201 status code indicates that the server has successfully processed the request, the new resource has been created and is now ready for interaction
    */
    res.status(201).json({success:true, person : name})
})



// POSTMAN
// POSTMAN (POST Request -> Regular)
app.post('/login/postman',(req,res)=>{
    let {Testing} = req.body;

    if(!Testing) {
        return res.status(401).send(`Please Provide Credentials`)
    }

    else{
        return res.status(200).json({success:true, data: [...people],Testing})
    }
})


// POSTMAN -> POST Request -> JavaScript
app.post('/api/people/postman',(req,res)=>{
    let {name} = req.body

    if(!name) {
        return res.status(400).json({success:false, msg : 'Nazil bhau Input to Daalo'})
    }

    res.status(200).json({sucess:true, maalPani : [...people, name]})
})


// POSTMAN -> PUT Request -> For updation
app.put('/api/people/postman/:id',(req,res)=>{
    let {id} = req.params
    let {name} = req.body

    let person = people.find((v,i,arr)=>v.id===Number(id))
    console.log(person)

    if(!person) {
        return res.status(404).json({success:false, msg: `Person with id ${id} not found`})
    }
    else{
        person.name = name;
        return res.status(200).json({sucess:true, data:people})
    }
})



// POSTMAN -> DELETE Request -> For Deletion
app.delete('/api/people/postman/:id',(req,res)=>{
    let {id} = req.params;
    let {name} = req.body;

    let person = people.find((v,i,arr)=>v.id==Number(id));

    let newPeople = people.filter((v,i,arr)=>v.id!=Number(id));

    if(!person) {
        return res.status(404).json({sucess:false, msg:`People with id ${id} doesn't exist`})
    }
    else{
        return res.status(200).json({sucess:true, data: newPeople})
    }
})

app.listen(3000,()=>console.log("Listening on the server 3000......"))