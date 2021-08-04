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
  preferredRenderOrder.forEach(element => {
    var leftDimension = getDimensionById(element[0]);
    var rightDimension = getDimensionById(element[1]);
    resultsBody.innerHTML += `
      <div class="row">
        <div class="column">
          <div class="row text-row">
            <span class="aligned left-aligned">${leftDimension.name}</span>
            <span class="aligned right-aligned">${rightDimension.name}</span>
          </div>
          <div class="row">
            <img src="../images/${leftDimension.imageSrc}" alt="${leftDimension.name} Logo" height="80px" class="img-left">
            <div class="rail" style="background-color: #${leftDimension.color}; text-align: left; width: 45%;">
              <span class="rail-text">45%</span>
            </div>
            <div class="rail neutral" style="width: 15%;">15%</div>
            <div class="rail" style="background-color: #${rightDimension.color}; text-align: right; width: 40%;">
              <span class="rail-text">40%</span>
            </div>
            <img src="../images/${rightDimension.imageSrc}" alt="${rightDimension.name} Logo" height="80px" class="img-right">
          </div>
        </div>
      </div>
    `;
  });

/*    <div class="row">
      <div class="column">
        <div class="row">
          <span class="aligned left-aligned">Globalism</span>
          <span class="aligned right-aligned">Isolationism</span>
        </div>
        <div class="row">
          <img src="../images/globalism.png" alt="Globalism Logo" height="80px" class="img-left">
          <div class="rail" id="globalism"><span class="rail-text">40%</span></div>
          <div class="rail neutral" id="int-nat-neutral"><span class="rail-text">20%</span></div>
          <div class="rail" id="isolationism"><span class="rail-text">40%</span></div>
          <img src="../images/isolationism.png" alt="Isolationism Logo" height="80px" class="img-right">
        </div>
      </div>
    </div> */
}
