// Mern Project By Rania

const express = require('express')
const app = express()

// Middleware
const middleware = (req, res, next)=>{
    console.log('Hello My Middleware')
    next()
}


app.get('/', (req, res) => {
    res.send('Hello World from the server...')
})

app.get('/signin', (req, res) => {
    res.send('Hello Log In World from the server...')
})

app.get('/signup', (req, res) => {
    res.send('Hello Registeration World from the server...')
})

app.get('/about', middleware, (req, res) => {
    res.send('Hello About World from the server...')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact World from the server...')
})

app.listen(3000, () => {
    console.log(`Server is running at port 3000...`)
})