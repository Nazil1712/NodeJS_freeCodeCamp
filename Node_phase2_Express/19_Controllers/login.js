const express = require('express')
const router = express.Router()
const {people} = require('../data')

// POST Request (Regular)
router.post('/',(req,res)=>{
    let {Testing} = req.body;

    if(!Testing) {
        return res.status(401).send(`Please provide Credentials`)
    }

    else{
        res.status(200).send(`Welcome ${Testing}`)
    }
})


// POSTMANs
// POSTMAN (POST Request -> Regular)
router.post('/postman',(req,res)=>{
    let {Testing} = req.body;

    if(!Testing) {
        return res.status(401).send(`Please Provide Credentials`)
    }

    else{
        return res.status(200).json({success:true, data: [...people],Testing})
    }
})


module.exports  = router