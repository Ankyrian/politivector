var preferredRenderOrder = [[11, 17], [10, 12], [15, 18], [2, 13], [22, 23], [16, 6], [1, 20], [14, 19], [3, 7], [5, 4], [8, 0], [9, 21]];

function getDimensionById(dimensionId) {
  var correctDim;
  dimensions.forEach(element => {
    if(element.id == dimensionId) {
      correctDim = element;
    }
  });
  return correctDim;
}

function resultsPageInit() {
  var resultsBody = document.getElementById('results-panel-content');
  var scoresMap = generateScoresMap();
  preferredRenderOrder.forEach(element => {
    var leftDimension = getDimensionById(element[0]);
    var rightDimension = getDimensionById(element[1]);
    var percentagesArr = calculateScorePercentages(scoresMap.get(`d${element[0]}`), scoresMap.get(`d${element[1]}`));
    var leftPercent = percentagesArr[0];
    var neutralPercent = percentagesArr[1];
    var rightPercent = percentagesArr[2];
    resultsBody.innerHTML += `
      <div class="row">
        <div class="column">
          <div class="row text-row">
            <span class="aligned left-aligned">${leftDimension.name}</span>
            <span class="aligned right-aligned">${rightDimension.name}</span>
          </div>
          <div class="row">
            <img src="../images/${leftDimension.imageSrc}" alt="${leftDimension.name} Logo" height="80px" class="img-left">
            <div class="rail" style="background-color: #${leftDimension.color}; text-align: left; width: ${calculateWidth(leftPercent)}%;">
              <span class="rail-text">${leftPercent}%</span>
            </div>
            ${neutralPercent > 0 ? `<div class="rail neutral" style="width: ${calculateWidth(neutralPercent)}%;">${neutralPercent}%</div>` : ``}
            <div class="rail" style="background-color: #${rightDimension.color}; text-align: right; width: ${calculateWidth(rightPercent)}%;">
              <span class="rail-text">${rightPercent}%</span>
            </div>
            <img src="../images/${rightDimension.imageSrc}" alt="${rightDimension.name} Logo" height="80px" class="img-right">
          </div>
        </div>
      </div>
    `;
  });
}

function generateScoresMap() {
  var result = new Map();
  var query = window.location.search.substring(1);
  var dimensions = query.split("&");
  for (var i = 0; i < dimensions.length; i++) {
    var idScoresPair = dimensions[i].split("=");
    var scoresPair = idScoresPair[1].split(",");
    result.set(idScoresPair[0], [parseInt(scoresPair[0]), parseInt(scoresPair[1])]);
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