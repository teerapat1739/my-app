const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    currentSave: { type: String, unique: true, index: true },
    email: String,
    passowrd: String,
    language: String,
    privacy: Number
})

const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass
