let mongoose = require('mongoose')

let resultSchema = new mongoose.Schema({
  countryId: Number,
  testType: Number,
  resultsArrays: [ {type: Map, of: Number} ]
})

module.exports = mongoose.model('Result', resultSchema, 'politivector_db');