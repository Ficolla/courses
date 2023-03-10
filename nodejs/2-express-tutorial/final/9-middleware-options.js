const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// app.use([logger, authorize]) // own middleware
// app.use(express.static('')) // espress middleware
app.use(morgan('tiny')) // morgan middleware

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('About')
})

app.get('/api/items', (req, res) => {
    console.log(req)
    console.log(req.query.user)
    res.send('Api items')
})

app.listen(5000, () => {
    console.log('server listening on port 5000...')
})