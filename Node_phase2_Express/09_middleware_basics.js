const express = require('express')
const app = express()
const logger = require('./logger')

// req => middleware => res

/* const logger = (req, res,next) => {
    const method = req.method
    const url = req.url
    const date = new Date().getFullYear()
    console.log(method, url, date)
    next()
} */

// here logger is middleware
app.get('/', logger,(req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/about',logger, (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.listen(3000, () => {
    console.log(`Listening on the port 3000...`)
})