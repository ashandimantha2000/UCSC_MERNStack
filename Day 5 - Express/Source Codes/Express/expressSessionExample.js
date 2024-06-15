const express = require('express');
const session = require('express-session');
const app = express();

// Use express-session middleware to create sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/add-to-cart/:item', (req, res) => {
  const item = req.params.item;
  
  // Check if there is a cart in the session, if not, create one
  req.session.cart = req.session.cart || [];

  // Add the item to the user's shopping cart
  req.session.cart.push(item);

  res.send(`Item ${item} added to your shopping cart.`);
});

app.get('/view-cart', (req, res) => {
  const shoppingCart = req.session.cart || [];
  res.send(`Your Shopping Cart: ${shoppingCart.join(', ')}`);
});

app.get('/clear-cart', (req, res) => {
    // Clear the shopping cart in the session
    req.session.cart = [];
  
    res.send('Shopping cart cleared.');
  });

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

// http://localhost:8080/add-to-cart/item1
// http://localhost:8080/view-cart
// http://localhost:8080/clear-cart
