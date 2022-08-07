var preferredRenderOrder = [[11, 17], [10, 12], [15, 18], [2, 13], [22, 23], [16, 6], [1, 20], [14, 19], [3, 7], [5, 4], [8, 0], [9, 21]];

function generateScoresMap(resultsQuery) {
  var result = {};
  for (const [key, value] of Object.entries(resultsQuery)) {
    let scoresPair = resultsQuery[key].split(",");
    result[key] = [parseInt(scoresPair[0]), parseInt(scoresPair[1])];
  }
  return result;
}

function calculateScorePercentages(left, right) {
  var neutralScore = left[1] + right[1];
  var totalScore = left[0] + right[0] + neutralScore;
  var leftActual = (left[0] / totalScore) * 100;
  var neutralActual = (neutralScore / totalScore) * 100;
  var rightActual = (right[0] / totalScore) * 100;
  var leftPercent = Math.floor(leftActual);
  var neutralPercent = Math.floor(neutralActual);
  var rightPercent = Math.floor(rightActual);
  while((leftPercent + neutralPercent + rightPercent) < 100) {
    var leftDecimal = leftActual % 1;
    var neutralDecimal = neutralActual % 1;
    var rightDecimal = rightActual % 1;

    if(leftDecimal > neutralDecimal && leftDecimal > rightDecimal) {
      leftPercent++;
      leftActual -= leftDecimal;
    }
    else if(neutralDecimal > leftDecimal && neutralDecimal > rightDecimal) {
      neutralPercent++;
      neutralActual -= neutralDecimal;
    }
    else {
      rightPercent++;
      rightActual -= rightDecimal;
    }
  }
  return [leftPercent, neutralPercent, rightPercent];
}

function calculateWidth(percent) {
  if(percent == 0) {
    return 0;
  }
  else if(percent < 6) {
    return 5;
  }
  return percent
}

module.exports = {
    generateScoresMap,
    calculateScorePercentages,
    calculateWidth,
    preferredRenderOrder
}
