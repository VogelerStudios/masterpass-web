const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    admin: {
        type: String 
    },
    adminPhoto: {
        type: String,
        default:'https://app.box.com/s/r8jvba7ddeniragg82o33hajuoxyq4nc'
    },
    category: {
        type: String
    },
    city: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String
    },
    eventIconURL: {
        type: String
    },
    eventPhotoURL: {
        type: String
    },
    name: {
        type: String
    },
    numberOfTickets: {
        type: Number
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('EventData', eventSchema);
