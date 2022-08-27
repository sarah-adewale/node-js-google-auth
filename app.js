const path = require('path') //path is a core nodejs module
const express = require('express')
const dotenv = require('dotenv')
//morgan for login
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db') //require db file in config folder


//load config file
dotenv.config({ path: './config/config.env' })

//passport config
require('./config/passport')(passport) //require the passport file in the config foler, pass in passport as an argument

connectDB() //calling the database
const app = express() //use express

//use morgan
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')) //log what pages are beign touched
}

//handlebars templating engine
app.engine('.hbs', exphbs.engine({   
        defaultLayout: 'main', 
        extname: '.hbs'
    })
)
app.set('view engine', '.hbs') //end handlebars

//MIDDLEWARE

//sessions
app.use(session({
        secret: 'keyboard cat',
        resave: false, //we dont want save a session if nothing is modified 
        saveUninitialized: false, //dont create a session until something is stored 
    })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())


//static folder
app.use(express.static(path.join(__dirname, 'public'))) //styles that can be referenced incase you dont want default materialize styles.
//the style overrides materialize. in the root folder, get a folder called public

//routes
app.use('/', require('./routes/index')) //setting up the server to catch the route
app.use('/auth', require('./routes/auth'))
//END MIDDLEWARE

const PORT = process.env.PORT || 1002 //port

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} node on port ${PORT}`)) //Listens on port saved in package.json script. uses the cross-env