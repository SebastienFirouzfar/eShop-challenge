const express = require('express')
const app = express()
const path = require('path')
const dotenv = require("dotenv");
const routesUsers = require('./routes/users')
const routesIndex = require('./routes/index')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const expressEjsLayout = require('express-ejs-layouts')

//login
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require("./config/passport")(passport)

//accèdes au dossier models
// const user = require("models/user");

dotenv.config();

const public = path.join(__dirname, '/public');
console.log(public)

//accèdes au style css
app.use(express.static(public));
app.use(express.urlencoded({ extended: true }));


//login
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
//use flash
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

app.use(routesIndex)

//connect to database / connecter à la base de donnée 
mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
});

app.set("view engine", "ejs");


// accèder à d'autre pages du projets
app.get('/', (req, res) => {
    res.render('layout')
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

//page layout => index
app.get("/layout", (req, res) => {
    res.render("layout");
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


//page login
app.get('/login', async (req, res) => {
    res.render('login');
})



//page register 
app.get("/register", (req, res) => {
    res.render("register");
});


// app.use(routesIndex)
app.use(routesUsers)


// app.post('/', (req, res) => {
//     console.log(req, body)
// })

app.listen(3000);
