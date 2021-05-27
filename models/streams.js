const mongoose = require('mongoose')

let StreamSchema = new mongoose.Schema({
    statusStream: String,
    content: Array
})

module.exports = mongoose.model('streams', StreamSchema)