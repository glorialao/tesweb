const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser")
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.use(cookieParser("secret"))
app.use(
  session({
    secret: "some_secret_key",
    cookie: {maxAge: 6000},
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn;
  next();
});

const { body, check, validationResult } = require("express-validator");

mongoose.connect(
  "mongodb+srv://Kelompok_6:kelompok6aquamarine@cluster0.hjgrw.mongodb.net/Aquamarine?retryWrites=true&w=majority",
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database terhubung");
    }
  }
);

// app.get("/pageadmin", async (req, res) => {
//   const password = req.body.password;
//   const username = req.body.username;
  
//   if (username === "admin" || password === "adminaqua") {
//     res.render("dashboard", { title: "Halaman Dashboard", layout: "layouts/main-layouts"});
//   }
// });

//routes
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
const wishlistRouter = require("./routes/wishlist");
const dashboardRouter = require("./routes/dashboard");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/dashboard", dashboardRouter);


app.listen("3000", () => {
  console.log("Server sudah berjalan di port 3000");
});
