const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role:{
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match : [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
