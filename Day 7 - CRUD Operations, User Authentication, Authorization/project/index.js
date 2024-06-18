require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connect");
connectDB(process.env.MONGODB_URL);
const productRoute = require("./routes/productRoutes");
const messageRoute = require("./routes/messageRoutes");
const registerRoute = require("./routes/register.router");
const loginRoute = require("./routes/login.routes");


const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use(express.json());
app.use(cors());

//use routes
app.use("/products", productRoute);
app.use("/messages", messageRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
