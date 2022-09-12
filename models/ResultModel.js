let mongoose = require('mongoose')

let resultSchema = new mongoose.Schema({
  ip: String,
  resultsArrays: [ {type: Map, of: Number} ]
})

module.exports = mongoose.model('Result', resultSchema); // , 'politivector_db'