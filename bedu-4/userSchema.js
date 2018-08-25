let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    follow: [String],
    address: addressSchema
})

module.exports = userSchema