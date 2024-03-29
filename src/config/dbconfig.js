const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/twitter_dev');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = connect;