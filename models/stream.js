const mongoose = require('mongoose')

let StreamSchema = new mongoose.Schema({
    statusStream: String,
})

module.exports = mongoose.model('stream', StreamSchema)