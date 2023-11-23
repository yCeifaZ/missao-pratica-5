const mongoose = require('mongoose');

const banco = mongoose;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = banco;