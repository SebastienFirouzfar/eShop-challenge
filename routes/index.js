const express = require('express');
const router = new express.Router();
const { ensureAuthenticated } = require("../config/auth.js")
//login page
// router.get('/', (req, res) => {
//     res.render('welcome');
// })
//register page
router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/', (req, res) => {
    res.render('layout')
})

//ensureAuthenticated,
router.get('/dashboard', (req, res) => { 
    res.render('dashboard',{
        user: req.user
    })
 })

module.exports = router; 