const express = require('express')
const app = express()
const path = require('path')
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//accèdes au dossier models
const user = require("./models/user");

dotenv.config();

const public = path.join(__dirname, 'public')

//accèdes au style css
app.use(express.static(public));
app.use(express.urlencoded({ extended: true }));

//connect to database / connecter à la base de donnée 
mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!"); 
    app.listen(3000, () => console.log("Server Up and running"));
});

app.set("view engine", "ejs");

// accèder à d'autre pages du projets
app.get('/', (req, res) => {
    res.render('index.ejs');
});

//page about
app.get("/about", (req, res) => { 
    res.render("about");
});

//page cart
app.get("/cart", (req, res) => { 
    res.render("cart");
});

//page checkout 
app.get("/checkout", (req, res) => { 
    res.render("checkout");
});

//page contact-us
app.get("/contact-us", (req, res) => { 
    res.render("contact-us");
});

//page gallery
app.get("/gallery", (req, res) => { 
    res.render("gallery");
});

//page header
// app.get("/header", (req, res) => { 
//     res.render("header");
// });

//page index
app.get("/index", (req, res) => { 
    res.render("index");
});

//page my-account
app.get("/my-account", (req, res) => { 
    res.render("my-account");
});

//page shop detail
app.get("/shop-detail", (req, res) => { 
    res.render("shop-detail");
});

//page shop
app.get("/shop", (req, res) => { 
    res.render("shop");
});

//page wishlist
app.get("/wishlist", (req, res) => { 
    res.render("wishlist");
});


app.post('/', (req, res) => {
    console.log(req, body)
})