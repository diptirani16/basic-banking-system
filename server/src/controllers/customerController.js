const { Router } = require('express');
const customerModel = require('../models/customersModel');

const router = Router();

router.get('/', async (req, res) => {
    const allCustomers = await customerModel.find().exec();
    res.status(200).send(allCustomers);
})

router.get('/:id', async (req, res) => {
    const customer = await customerModel.findById(req.params.id).exec();
    res.status(200).send(customer);
})

router.post('/', async (req, res) => {
    const customer = await customerModel.create(req.body);
    res.status(200).send(customer);
})

router.put('/:id', async (req, res) => {
    const customer = await customerModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(customer);
})

router.delete('/:id', async (req, res) => {
    const customer = await customerModel.findByIdAndDelete(req.params.id);
    res.status(200).send(customer);
})

module.exports = router;