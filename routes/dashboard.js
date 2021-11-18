const express = require("express");
const Dashboard = require("../models/dashboard");
const router = express.Router();

router.get("/dashboard", async (req, res) => {
  const dashboard = await Dashboard.find();

  res.render("pages/dashboard",{
    dashboard,
    msg: req.flash("msg"), //untuk menampilkan data pesan
  });
});

router.get("/dashboard/add", (req, res) => {
  res.render("pages/tambah-product");
});

router.post("/dashboard", (req, res) => {
  Dashboard.insertMany(req.body, (error, result) => {
    req.flash("msg", "Produk berhasil ditambahkan!");
    res.redirect("/dashboard");
  });
});

router.get("/dashboard/edit/:id", async (req, res) => {
  const dashboard = await Dashboard.findById(req.params.id);

  res.render("pages/edit-data", {
      dashboard,
  });
});

router.put("/dashboard", (req, res) => {
  Dashboard.updateOne(
    { _id: req.body._id },
    {
      $set: {
        imagePath: req.body.imagePath,
        link: req.body.link,
        name: req.body.name,
        price: req.body.price,
      },
    }
  ).then((result) => {
    req.flash("msg", "Data produk berhasil diubah!");
    res.redirect("/dashboard");
  })
})

router.delete("/dashboard", (req, res) => {
  Dashboard.findByIdAndDelete(req.body.id).then((result) => {
    req.flash("msg", "Produk Berhasil Dihapus!");
    res.redirect("/dashboard");
  });
});

module.exports = router;
