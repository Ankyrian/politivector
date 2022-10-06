let mongoose = require('mongoose');

const dbPort = 27017;

class dbConnection {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://127.0.0.1:${dbPort}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new dbConnection()