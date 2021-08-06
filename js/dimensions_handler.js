const buttonColor = '#0e446c';
const selectedColor = '#11334c';
const buttonIdPrefix = 'dimensions-button-';

var droppedDown = false;
var matchWindowSize = window.matchMedia("(max-width: 800px)");
var selectedButton = 0;
var dimensionButtonHTML;

function dimensionsPageInit() {
  var dropdownButton = document.getElementById('dropdown-button');
  dropdownButton.style.visibility = matchWindowSize.matches ? "visible" : "hidden";
  dropdownButton.style.position = matchWindowSize.matches ? "static" : "absolute";
  matchWindowSize.addListener(dropdownAdder);
  var index = 0;
  var dimensionButtons = document.getElementById('dimension-buttons');
  dimensions.forEach(element => {
    dimensionButtons.innerHTML +=
      '<button class="d-button" id="' + buttonIdPrefix + index + '" onclick="dimensionOnClick(' + index + ')">' + element.name + '</button>';
    index++;
  });
  dimensionButtonHTML = dimensionButtons.innerHTML;
  dimensionOnClick(selectedButton);
}

function dimensionOnClick(index) {
  document.getElementById(buttonIdPrefix + selectedButton).style.backgroundColor = buttonColor;
  var current = dimensions[index];
  document.getElementById('dimension-image').style.backgroundImage = 'url("' + current.imageSrc +'")';
  document.getElementById('quote-text').innerHTML = current.quote;
  document.getElementById('description-text').innerHTML = current.text;
  document.getElementById(buttonIdPrefix + index).style.backgroundColor = selectedColor;
  selectedButton = index;
  if(matchWindowSize.matches) {
    dropdownOnClick();
  }
}

function dropdownAdder() {
  location.reload();
}

function dropdownOnClick() {
  if(droppedDown) {
    document.getElementById('dimension-buttons').innerHTML = "";
    droppedDown = false;
  }
  else {
    document.getElementById('dimension-buttons').innerHTML = dimensionButtonHTML;
    droppedDown = true;
  }
}
