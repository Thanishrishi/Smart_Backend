const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username : {
        type: String,
    },
    Email : {
        type: String,
    },
    Password : {
        type: String,
    },
})

module.exports = mongoose.model('User',userSchema);