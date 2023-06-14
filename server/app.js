// Mern Project By Rania
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

// To secure code by keeping password & API secret
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT

// Database Connection
require('./db/conn');

// Model & User Schema
// const User = require('./model/userSchema');

// if data in the form of express json, convert into object and show
app.use(express.json());

// link to Router to make our route easy
app.use(require('./router/auth'));

// Middleware
const middleware = (req, res, next) => {
    console.log('Hello My Middleware')
    next()
}

// app.get('/', (req, res) => {
//     res.send('Hello World from the server...')
// })

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

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`)
})