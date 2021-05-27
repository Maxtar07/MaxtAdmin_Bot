const mongoose = require('mongoose')

let WarnsSchema = new mongoose.Schema({
    guildid: String,
    user: String,
    content: Array
})

module.exports = mongoose.model('Warns', WarnsSchema)