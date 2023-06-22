const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    // res.json('awesome');
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
            console.log(token);

            // cookie
            res.cookie('jwtoken', token, {
                // expires: new Date(Date.now + 25892000000),
                expiresIn: '30d',
                httpOnly: true
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


router.get('/signin', (req, res) => {
    res.send('Hello Log In World from the server...')
})

router.get('/signup', (req, res) => {
    res.send('Hello Registeration World from the server...')
})

// Middleware
const middleware = (req, res, next) => {
    console.log('Hello My Middleware')
    next()
}

router.get('/about', middleware, (req, res) => {
    res.cookie("TEST", 'mern');
    res.send('Hello About World from the server...')
})

router.get('/contact', (req, res) => {
    res.send('Hello Contact World from the server...')
})


module.exports = router;