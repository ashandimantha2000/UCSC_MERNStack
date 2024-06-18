const express = require('express');
const Message = require('../models/messageSchema');

const router = express.Router();

// GET all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific message
router.get('/:id', getMessage, (req, res) => {
    res.json(res.message);
});

// POST a new message
router.post('/', async (req, res) => {
    const message = new Message({
        message: req.body.message
    });

    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//put a message
router.put('/:id', getMessage, async (req, res) => {
    res.message.message = req.body.message;
    try {
        const updatedMessage = await res.message.save();
        res.json(updatedMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// DELETE a message
router.delete('/:id', async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);
        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json({ message: 'Message deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getMessage(req, res, next) {
    let message;
    try {
        message = await Message.findById(req.params.id);
        if (message == null) {
            return res.status(404).json({ message: 'Cannot find message' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.message = message;
    next();
}

module.exports = router;