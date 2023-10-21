const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

// app.use([logger,authorize]) //order matters
// app.use([authorize,logger]) // order matters

//Third Party Module
// It shows method, route, status code, time
app.use(morgan('tiny'))

// here logger is middleware
app.get('/',(req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/items',(req, res) => {
    console.log(req.user) // prints info about user that we have created in authorized!
    res.send('<h1>Items Page</h1>')
})

app.get('/products', (req, res) => {
    res.send('<h1>Products Page</h1>')
})

app.listen(3000, () => {
    console.log(`Listening on the port 3000...`)
})