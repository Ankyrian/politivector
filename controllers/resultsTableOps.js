let resultModel = require('../models/ResultModel');

function createResult(userIP, arrayOfDimensions) {
    let newResult = new resultModel({
        ip: userIP,
        resultsArrays: arrayOfDimensions
    })

    newResult.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
    })
}

module.exports = {createResult};