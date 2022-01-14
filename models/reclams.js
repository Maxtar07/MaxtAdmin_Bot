const mongoose = require('mongoose')

let ReclamSchema = new mongoose.Schema({
    NewReclam: String,
    content: Array
})

module.exports = mongoose.model('reclams', ReclamSchema)