const express = require('express')
const router = express.Router()

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello World from the server router...')
})

router.post('/register', (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({ error: "Please Fill All The Fields Properly!" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) { return res.status(422).json('Email Already Exist!') }

            const user = new User({ name, email, phone, work, password, cpassword })

            user.save().then(() => {
                res.status(201).json({ message: 'User Registered Successfully!' });
            }).catch((err) => {
                res.status(500).json({ error: 'Failed To Registered!' })
            })
        }).catch((err) => {
            console.log(err);
        })


    // console.log(name);
    // console.log(email);
    // console.log(req.body);
    // res.json({ message: req.body });
    // res.send('My Registeration Page');
})

module.exports = router;