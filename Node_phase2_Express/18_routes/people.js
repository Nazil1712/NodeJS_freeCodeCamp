const express = require('express')
const router = express.Router()
const { people } = require('../data')


// GET Request
router.get('/',(req,res)=>{
    res.status(200).json({success:true, data:people})
})


// POST Request (JavaScript)
router.post('/',(req,res)=>{
    let {name} = req.body
    
    if(!name) {
        return res.status(400).json({success:false, msg:'Nazil bhau credentials to daalo'})
    }
    /* 
    The 201 status code indicates that the server has successfully processed the request, the new resource has been created and is now ready for interaction
    */
    res.status(201).json({success:true, person : name})
})



// POSTMAN -> POST Request -> JavaScript
router.post('/postman',(req,res)=>{
    let {name} = req.body

    if(!name) {
        return res.status(400).json({success:false, msg : 'Nazil bhau Input to Daalo'})
    }

    res.status(200).json({sucess:true, maalPani : [...people, name]})
})


// POSTMAN -> PUT Request -> For updation
router.put('/postman/:id',(req,res)=>{
    let {id} = req.params
    let {name} = req.body

    let person = people.find((v,i,arr)=>v.id===Number(id))
    console.log(person)

    if(!person) {
        return res.status(404).json({success:false, msg: `Person with id ${id} not found`})
    }
    else{
        if(name){
            person.name = name;
        }
        return res.status(200).json({sucess:true, data:people})
    }
})



// POSTMAN -> DELETE Request -> For Deletion
router.delete('/postman/:id',(req,res)=>{
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

module.exports = router;