const express = require('express');
const session = require('express-session');

const app = express();

// Use express-session middleware to create sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/example', (req, res) => {
  // Access or modify session data in req.session
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  res.send(`View count: ${req.session.views}`);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
