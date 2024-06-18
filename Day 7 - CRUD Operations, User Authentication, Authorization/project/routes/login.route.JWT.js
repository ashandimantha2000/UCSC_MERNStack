const express = require('express');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

require("dotenv").config();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if a user exists with the given email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                status: 'failed',
                message: 'Invalid email or password'
            });
        }
        //check if the input password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                status: 'failed',
                message: 'Invalid email or password'
            });
        }
        //send the success message with a token 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'failed',
            message: 'An error occurred while processing your request'
        });
    }
});

module.exports = router;
