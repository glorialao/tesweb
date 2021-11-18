const mongoose = require("mongoose");

//schema
const Dashboard = mongoose.model("Dashboard", {
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

module.exports = Dashboard;
