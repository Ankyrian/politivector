var dimensionScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// TESTING DATA
var testQuestion = {
  text: 'Test question Test question Test question Test question Test question Test question Test question Test question'
}
//

function replaceQuestion(question) {
  document.getElementById('question-font').innerHTML = question.text;
}

// document.addEventListener('DOMContentLoaded', replaceQuestion(testQuestion), false);
