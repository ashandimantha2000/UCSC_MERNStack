const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        console.log(token);
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        console.log("User found", user);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticate;