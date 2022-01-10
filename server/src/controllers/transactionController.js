const { Router } = require('express');
const TransactionModel = require('../models/transactionsModel');

const router = Router();

router.get('/', async (req, res) => {
    const transactions = await TransactionModel.find().exec();
    res.status(200).send(transactions);
})

router.get('/:id', async (req, res) => {
    const transaction = await TransactionModel.findById(req.params.id).exec();
    res.status(200).send(transaction);
})

router.post('/', async (req, res) => {
    const transaction = await TransactionModel.create(req.body);
    res.status(200).send(transaction);
})

router.put('/:id', async (req, res) => {
    const transaction = await TransactionModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(transaction);
})

router.delete('/:id', async (req, res) => {
    const transaction = await TransactionModel.findByIdAndDelete(req.params.id);
    res.status(200).send(transaction);
})

module.exports = router;