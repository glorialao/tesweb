const ProductIndex = require("../models/proindex");
const mongoose = require("mongoose");

// Menghubungkan ke database platform yang ada di cloud yaitu mongodb atlas
mongoose.connect(
  "mongodb+srv://Kelompok_6:kelompok6aquamarine@cluster0.hjgrw.mongodb.net/Aquamarine?retryWrites=true&w=majority",
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database terhubung untuk seeding");
    }
  }
);

// Isi dari masing-masing produk
const productsIndex = [
  new ProductIndex({
    imagePath: "https://i.ibb.co/hm6g7TB/salmon.jpg",
    link: "/salmon",
    name: "Salmon",
    price: 285000,
  }),
  new ProductIndex({
    imagePath: "https://i.ibb.co/zV3T2wP/shrimp1.jpg",
    link: "/shrimp",
    name: "Shrimp",
    price: 139000,
  }),
  new ProductIndex({
    imagePath: "https://i.ibb.co/gWwrjWk/redsnapper1.jpg",
    link: "/redsnapper",
    name: "Red Snapper",
    price: 118000,
  }),
  new ProductIndex({
    imagePath: "https://i.ibb.co/h1RTct5/lobster1.jpg",
    link: "/lobster",
    name: "Lobster",
    price: 175000,
  }),
];

// Memasukkan isi dari produk yang ada ke dalam database
var done = 0;
for (var i = 0; i < productsIndex.length; i++) {
  productsIndex[i].save((err, res) => {
    done++;
    if (done == productsIndex.length) {
      console.log("Produk Index berhasil di upload");
      exit();
    }
  });
}

// Fungsi exit setelah berhasil
function exit() {
  mongoose.disconnect();
}
