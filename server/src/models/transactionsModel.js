const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userID: { type: Number },
    sender: { type: String },
    reciepent: { type: String },
    amount: { type: Number },
    date: { type: String },
    status: { type: String }
})

const transactionModel = mongoose.model('transactionModel', transactionSchema);

module.exports = transactionModel;