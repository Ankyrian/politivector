let resultModel = require('../models/ResultModel');

function createResult(userCountryId, testTypeId , arrayOfDimensions) {
    let newResult = new resultModel({
        countryId: userCountryId,
        testType: testTypeId,
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