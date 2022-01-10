const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionID: { type: mongoose.ObjectId },
    sender: { type: String },
    reciepent: { type: String },
    amount: { type: Number },
    date: { type: Date },
    status: { type: String }
})

const transactionModel = mongoose.model('transactionModel', transactionSchema);

module.exports = transactionModel;