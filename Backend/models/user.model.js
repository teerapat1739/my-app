const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String, unique: true, index: true },
    passowrd: String,
    language: String,
    privacy: Number
})

const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass
