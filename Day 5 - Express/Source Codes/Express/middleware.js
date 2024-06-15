const express = require('express');

var app = express();

app.use('/pages', function(req, res, next) {
    console.log("Request received at "+Date.now());
    next();
});

app.get('/pages', function(req, res){
    res.send('This is the Pages File');
    console.log("Response send at "+Date.now());
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});