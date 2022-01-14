const mongoose = require('mongoose')

let TicketSchema = new mongoose.Schema({
    NewTicket: String,
    content: Array
})

module.exports = mongoose.model('tickets', TicketSchema)