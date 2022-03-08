const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;

const Database = {
    dbInstance: null,
    connect: () => {
        return new Promise((accept, reject) => {
            MongoClient.connect(mongoURL, {useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                } else {
                    this.dbInstance = client.db();
                    accept(client);
                }
            }); //Error-first callback
        });
    },
    collection: (name) => {
        return this.dbInstance.collection(name);
    }
};

module.exports = Database;