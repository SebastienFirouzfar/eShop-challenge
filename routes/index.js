const express = require('express');
const router = new express.Router();
const { ensureAuthenticated } = require("../config/auth.js")
//login page
// router.get('/', (req, res) => {
//     res.render('welcome');
// })
//register page
router.get('/register', (req, res) => {
    res.render('register' , {
        user: req.user
    });
})

router.get('/', (req, res) => {
    res.render('layout' , {
        user: req.user
    })
})



//page about
router.get("/about", (req, res) => {
    res.render("about" , {
        user: req.user
    });
});

//page cart
router.get("/cart", (req, res) => {
    res.render("cart" , {
        user: req.user
    });
});

//page checkout 
router.get("/checkout", (req, res) => {
    res.render("checkout" , {
        user: req.user
    });
});

//page contact-us
router.get("/contact-us", (req, res) => {
    res.render("contact-us" , {
        user: req.user
    });
});

//page gallery
router.get("/gallery", (req, res) => {
    res.render("gallery" , {
        user: req.user
    });
});

//page layout => index
router.get("/layout", (req, res) => {
    res.render("layout" , {
        user: req.user
    });
});

//page my-account
router.get("/my-account", (req, res) => {
    res.render("my-account" , {
        user: req.user
    });
});

//page shop detail
router.get("/shop-detail", (req, res) => {
    res.render("shop-detail" , {
        user: req.user
    });
});

//page shop
router.get("/shop", (req, res) => {
    res.render("shop" , {
        user: req.user
    });
});

//page wishlist
router.get("/wishlist", (req, res) => {
    res.render("wishlist" , {
        user: req.user
    });
});


//page login
router.get('/login', (req, res) => {
    res.render('login', {
        user: req.user
    });
})



//page register 
router.get("/register", (req, res) => {
    res.render("register" , {
        user: req.user
    });
});


//ensureAuthenticated,
// router.get('/dashboard',ensureAuthenticated ,(req, res) => { })


 router.get('/dashboard', (req, res) => { 
    res.render('dashboard',{
        user: req.user
    })
 })

 router.get('/product', (req, res) => { 
    res.render('product',{
        user: req.user
    })
 })

module.exports = router; 