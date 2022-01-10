const express = require('express');
const app = express();

const customerController = require('./controllers/customerController');
const transactionController = require('./controllers/transactionController');

require('./dbContext/mongo');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).send('Happy Happy')
})

app.use('/customers', customerController);
app.use('/transactions', transactionController);

app.listen(3002, () => {
    console.log('Server running on port 3002')
})
