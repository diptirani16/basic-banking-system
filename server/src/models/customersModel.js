const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    userID: { type: Number },
    name: { type: String },
    email: { type: String },
    currentBalance: { type: Number }
})

const customerModel = mongoose.model('customerModel', customerSchema);

module.exports = customerModel;