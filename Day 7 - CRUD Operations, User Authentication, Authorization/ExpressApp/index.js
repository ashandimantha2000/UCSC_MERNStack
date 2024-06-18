require('dotenv').config();
const express = require('express');
const app = express();
const MessageSchema = require('./models/messages');

const router = express.Router();

port= process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('Hello World');
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})