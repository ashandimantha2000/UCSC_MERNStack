require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connect");
connectDB(process.env.MONGODB_URL);
const productRoute = require('./routes/productRoutes')

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


//use routes
app.use('/products', productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
