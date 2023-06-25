const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello World from the server router...')
})
///////// Using Promises
// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         res.status(422).json({ error: "Please Fill All The Fields Properly!" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) { return res.status(422).json('Email Already Exist!') }

//             const user = new User({ name, email, phone, work, password, cpassword })

//             user.save().then(() => {
//                 res.status(201).json({ message: 'User Registered Successfully!' });
//             }).catch((err) => {
//                 res.status(500).json({ error: 'Failed To Registered!' })
//             })
//         }).catch((err) => {
//             console.log(err);
//         })


//     // console.log(name);
//     // console.log(email);
//     // console.log(req.body);
//     // res.json({ message: req.body });
//     // res.send('My Registeration Page');
// })
/////////// Using Async Await
router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({ error: "Please Fill All The Fields Properly!" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json('Invalid Credentials!')
        }
        else if (password != cpassword) {
            return res.status(422).json('Invalid Credentials!')
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword })

            // Middleware for hashing password (whenever/whereever save call)
            const userRegister = await user.save();

            if (userRegister) {
                res.status(200).json({ message: 'User Registered Successfully!' });
            }
            else {
                res.status(500).json({ error: 'Invalid Credentials!' })
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})

// login route
router.post('/signin', async (req, res) => {
    // console.log(req.body);
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json({ error: "Please Fill All The Fields Properly!" });
        }

        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin)

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // Middleware for JWT token 
            token = await userLogin.generateAuthToken();
            console.log('the token is -> ' + token);

            // cookie
            res.cookie('jwtoken', token, {
                // expires: new Date(Date.now + 25892000000),
                expiresIn: 3 * 24 * 60 * 60,
                httpOnly: false
            });

            if (isMatch) {
                res.status(200).json({ message: 'User SignIn Successfully!' });
            } else {
                res.status(400).json({ error: 'Invalid Credentials!' })
            }
        } else {
            res.status(400).json({ error: 'Invalid Credentials!' })
        }

    } catch (err) {
        console.log(err);
    }
})
// About us page
router.get('/about', authenticate, (req, res) => {
    console.log('Hello my about')
    res.send(req.rootUser)
})

// get user data for contact and home page
router.get('/getdata', authenticate, (req, res) => {
    console.log('Hello my contact')
    res.send(req.rootUser)
})

router.post('/contact', authenticate, (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if()
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;