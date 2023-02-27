const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  qrUrl: {
    type: String
  },
  description: {
    type: String
  },
  owner: {
    type: String,
  }, 
  contractAddress: {
    type: String
  }
});

module.exports = mongoose.model('TicketData', ticketSchema);