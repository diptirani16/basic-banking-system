const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/bank')
    .then(() => console.log('database connection successfull'))
    .catch(err => console.log(err));
