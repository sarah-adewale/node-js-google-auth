const mongoose = require('mongoose')

// create a schema
const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
     displayName: {
        type: String,
        required: true
    },
     firstName: {
        type: String,
        required: true
    },
     lastName: {
        type: String,
        required: true
    },
     image: {
        type: String,
        // required: true
    },
    createdAt: {
        type: Date,
        dafualt: Date.now //assign a value if not value present(automatically put the date ans time in)
    }
})

module.exports = mongoose.model('User', UserSchema) //export mongoose