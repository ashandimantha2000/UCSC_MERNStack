const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
const router = require('./routes/route.js');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Hello World!");
});


app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
