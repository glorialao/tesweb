const mongoose = require("mongoose");

// Untuk mendeklarasikan variable dari proIndexSchema yang akan dimasukkan ke database
const proIndexSchema = mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("ProductIndex", proIndexSchema, "proindex");
