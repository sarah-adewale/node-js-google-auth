const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth') //getting two variables from the same location

const Story = require('../models/Story')

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
    try{
        const stories = await Story.find({user: req.user.id}).lean() //.lean() handling passing data to a handlebar template; loop thru, do logic 
        res.render('dashboard', {
        name: req.user.firstName,
        stories
    })
    }catch(err){
        console.error(err)
    }

})

module.exports = router