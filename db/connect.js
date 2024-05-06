const mongoose = require('mongoose');
const { options } = require('../routes/stock');

uri ="mongodb://localhost:27017/stock"

const connectDB = () => {

    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB  