const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World from the server router...')
})

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
    // res.send('My Registeration Page');
})

module.exports = router;