const express = require('express');
const Message = require('../models/messageSchema');
const { authenticate } = require('../Middleware/auth');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const messageContent = req.body.Message;
        const message = new Message({
            name: req.user.name,
            userId: req.user._id,
            content: messageContent
        });
        await message.save();
        res.status(200).json({
            status: 'success',
            data: {
                message
            }
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
