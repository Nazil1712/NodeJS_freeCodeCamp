const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))

/* 

This is middleware , It helps us to parse payload(the data coming from form(Browser)) 

This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

extended --> This option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).

*/

app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// simple index.html
app.post('/login', (req, res) => {
    // console.log(req.body)
    const { Testing } = req.body
    if (Testing) {
        return res.status(200).send(`Welcome ${Testing}`)
    }
    else {
        res.status(401).send(`Please provide credentials`)
    }
    // res.send("POST")
})


// To insert data --> POST
/*
    The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 

*/

app.use(express.json())

app.post('/api/people', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    /* 
    The 201 status code indicates that the server has successfully processed the request, the new resource has been created and is now ready for interaction
    */
    res.status(201).json({ success: true, person: name })
})


//Postman
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people,name] })
})




app.listen(3000, () => console.log("Listening on the server 3000......"))