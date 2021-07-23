const buttonColor = '#0e446c';
const selectedColor = '#11334c';
const buttonIdPrefix = 'dimensions_button_';

var selectedButton = 0;

function dimensionsPageInit() {
  var index = 0;
  dimensions.forEach(element => {
    document.getElementById('dimensions_panel').innerHTML +=
      '<button class="d_button" id="' + buttonIdPrefix + index + '" onclick="dimensionOnClick(' + index + ')">' + element.name + '</button>';
    index++;
  });
  dimensionOnClick(selectedButton);
}

function dimensionOnClick(index) {
  document.getElementById(buttonIdPrefix + selectedButton).style.backgroundColor = buttonColor;
  var current = dimensions[index];
  document.getElementById('dimension_image').style.backgroundImage = 'url("' + current.imageSrc +'")';
  document.getElementById('quote_text').innerHTML = current.quote;
  document.getElementById('description_text').innerHTML = current.text;
  document.getElementById(buttonIdPrefix + index).style.backgroundColor = selectedColor;
  selectedButton = index;
}
