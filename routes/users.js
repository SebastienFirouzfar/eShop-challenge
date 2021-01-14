const express = require('express');
// const path = require('path')
const router = new express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require("../models/user.js");

// const public = path.join(__dirname, '../public');
// console.log(public)


router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/layout',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next);
})


//Register handle
router.post('/register', (req, res) => {
    const { firstName, lastName, email, password, password2 } = req.body;
    // console.log(req.body)
    let errors = [];
    console.log(' firstName: ' + firstName + ' lastName : ' + lastName + ' email: ' + email + ' password: ' + password);
    if (!firstName || !lastName || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" })
    }
    //check if match
    if (password !== password2) {
        errors.push({ msg: "passwords dont match" });
    }
    console.log(password + password2)

    //check if password is more than 6 characters
    if (password.length < 6) {
        errors.push({ msg: 'password atleast 6 characters' })
    }
    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            password2: password2
        })

    } else {
        //validation passed
        User.findOne({ email: email }).exec((err, user) => {
            console.log(user);
            if (user) {
                errors.push({ msg: 'email already registered' });
                render(res, errors, firstName, lastName, email, password, password2);

            } else {
                const newUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                });

                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err, hash) => {

                        if (err) throw err;
                        //save pass to hash
                        newUser.password = hash;

                        //save user
                        newUser.save().then((value) => {
                            console.log(value)
                            req.flash('success_msg', 'You have now registered!')
                            res.redirect('/login');
                        })
                            .catch(value => console.log(value));

                    }));
            } //ELSE statement ends here

        });
    }
});

// router.post('/login', (req, res, next) => {
//     passport.authenticate('local',{
//         successRedirect : '/dashboard',
//         failureRedirect : '/login',
//         failureFlash : true,
//         })(req,res,next);
// })

//logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Now logged out');
    res.redirect('/users/login');
})

module.exports = router;