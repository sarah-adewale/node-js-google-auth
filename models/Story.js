const mongoose = require('mongoose')

// create a schema
const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
     body: {
        type: String,
        required: true
    },
     status: {
        type: String,
        default: 'public',
        enum: ['public', 'private'] //LIST OF POSSIBLE VALUES   
    },
     user: { //USER CONNECTED TO EACH STORIES
        type: mongoose.Schema.Types.ObjectId, //connecting each individual story not to the users name but to the unique object id of the database object associated with the user
        ref: true //referencing back to the created user module
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