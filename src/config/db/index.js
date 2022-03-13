const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Ket noi thanh cong');
    } catch (error) {
        console.log('Ket noi failed');
    }
}
module.exports = { connect };
