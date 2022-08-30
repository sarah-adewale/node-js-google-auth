const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth') //getting two variables from the same location

//@desc login/landing page
//@route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

//@desc dashboard
//@route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        name: req.user.firstName,
    })
})

module.exports = router