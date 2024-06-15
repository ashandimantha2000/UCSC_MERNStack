const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

app.get('/example', (req, res) => {
  console.log(req.cookies); // Access the parsed cookies in req.cookies
  res.send('GET request received');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});