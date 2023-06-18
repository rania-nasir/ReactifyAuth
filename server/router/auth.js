const express = require('express')
const router = express.Router()

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
        if (userExist) { return res.status(422).json('Email Already Exist!') }

        const user = new User({ name, email, phone, work, password, cpassword })

        const userRegister = await user.save();
        if (userRegister) {
            res.status(201).json({ message: 'User Registered Successfully!' });
        } else {
            res.status(500).json({ error: 'Failed To Registered!' })
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
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json({ error: "Please Fill All The Fields Properly!" });
        }

        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin)

        if (userLogin) {
            res.status(200).json({ message: 'User SignIn Successfully!' });
        } else {
            res.status(400).json({ error: 'Failed To SignIn!' })
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
    res.send('Hello About World from the server...')
})

router.get('/contact', (req, res) => {
    res.send('Hello Contact World from the server...')
})


module.exports = router;