// Mern Project By Rania
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const cors = require("cors");
var cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

// To secure code by keeping password & API secret
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT

// // Enable CORS middleware
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

app.use(cookieParser())

// if data in the form of express json, convert into object and show
app.use(express.json()); // To parse JSON payloads

// Database Connection
require('./db/conn');

// Model & User Schema
const User = require('./model/userSchema');

// link to Router to make our route easy
app.use(require('./router/auth'));

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`)
})