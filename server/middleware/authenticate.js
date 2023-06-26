const jwt = require('jsonwebtoken')
const User = require('../model/userSchema');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken; // Retrieve the token from req.cookies
        let verifyToken;
        try {
            verifyToken = jwt.verify(token, process.env.SECRET_KEY);        // current error here
        } catch (err) {
            throw new Error('Invalid or Expired Token');
        }
        const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });
        if (!rootUser) {
            throw new Error('User Not Found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (err) {
        res.status(401).send('Unauthorized: No token Provided' + err.message);
        console.log(err);
    }
}

module.exports = Authenticate;