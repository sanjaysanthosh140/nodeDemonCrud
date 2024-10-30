const { MongoClient } = require('mongodb');

const state = {
    db: null
};

async function connect() {
    const url = 'mongodb://localhost:27017/';
    const dbName = 'slid';
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Database connected successfully');
        state.db = client.db(dbName);
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

connect();

module.exports.getDb = function() {
    return state.db;
};
