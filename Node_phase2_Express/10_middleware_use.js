const express = require('express')
const app = express()
const logger = require('./logger')

// req => middleware => res
app.use(logger)

// here logger is middleware
app.get('/',(req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/items',(req, res) => {
    res.send('<h1>Items Page</h1>')
})

app.get('/products', (req, res) => {
    res.send('<h1>Products Page</h1>')
})

app.listen(3000, () => {
    console.log(`Listening on the port 3000...`)
})