const express = require('express');
const port = 5555;

const app = express();

const router = require('./routes/routes.js');

const taskRouter = require('./routes/task.js');


app.use('/', router);
// app.use('/', taskRouter);

app.listen(port, function() {
    console.log('Server is running on port ', port);
});