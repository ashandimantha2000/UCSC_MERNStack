const express = require('express');
const Message = require('../models/messageSchema');
const { authenticate } = require('../Middleware/auth');

const router = express.Router();

const authenticateMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        req.user = user;
        console.log("User found", user);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

const authorize = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'You are not authorized to access this route' });
        }
        console.log("Expected Role", role);
        console.log("User's role", req.user.role);
        next();
    }
};

module.exports = { authenticate: authenticateMiddleware, authorize };
