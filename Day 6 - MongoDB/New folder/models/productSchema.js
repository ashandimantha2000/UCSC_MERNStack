const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Electronics", "Clothing", "Furniture"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
