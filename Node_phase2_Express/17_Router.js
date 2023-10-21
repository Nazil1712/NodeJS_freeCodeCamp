const express = require('express')
const router = express.Router()
const app = express()

// If we want to run with routes only
/* const people = require('./18_routes/people')
const login = require('./18_routes/login') */


// If we want to run with routes And CONTROLLER
const people = require('./19_Controllers/people')
const login = require('./19_Controllers/login')

// Static assets
app.use(express.static('./methods-public'))

// Parses form data (For POST method --> Regular)
app.use(express.urlencoded({extended:false}))

// Parses Json data (For POST method --> Javascript)
app.use(express.json())

// Express Router - /api/people
app.use('/api/people',people)

// Express Router - /login
app.use('/login',login)


app.listen(3000,()=>console.log("Listening on the server 3000......"))