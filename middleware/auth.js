module.exports = {
    ensureAuth: function (req, res, next) { //checks for log in
        if(req.isAuthenticated()){ //is logged in
            return next() //go to the next middleware(dashboard)
        }else{ //if not
            res.redirect('/') //go to dashboard to login
        }
    },
    ensureGuest: function (req, res, next){ //ensures that a logged in user isnt told to log in always
        if(req.isAuthenticated()){ //is this is a user
            res.redirect('/dashboard') //go to the dashboard
        }else{ //if not
            return next() //go to the next middleware
        }
    }
}