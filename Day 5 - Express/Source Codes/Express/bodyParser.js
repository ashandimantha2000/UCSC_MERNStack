const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Process the registration data and store it in the database
  res.send(`User ${username} registered successfully! Email is ${email}`);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
