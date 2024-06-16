const express = require("express");
const Product = require("../models/productSchema");

const router = express.Router();

// Middleware to parse json
router.use(express.json());

//Post Request
router.post("/", async (req, res) => {
  const { name, price, category } = req.body;

  try {
    const product = new Product({ name, price, category });
    const savedProduct = await product.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//Get Request
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//Update Request
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, category },
      { new: true, runValidators: true}
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.send(updatedProduct);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//Delete Request
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.send(deletedProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
