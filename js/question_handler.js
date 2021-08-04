const Dimensions = Object.freeze(
  {
    "ANTHROPOCENTRISM": 0,
    "ASSIMILATIONISM": 1,
    "AUTHORITARIANISM": 2,
    "AUTOCRACY": 3,
    "CAPITALISM": 4,
    "COMMUNISM": 5,
    "CONSERVATISM": 6,
    "DEMOCRACY": 7,
    "ECOCENTRISM": 8,
    "ELITISM": 9,
    "GLOBALISM": 10,
    "INTERNATIONALISM": 11,
    "ISOLATIONISM": 12,
    "LIBERTARIANISM": 13,
    "MERITOCRACY": 14,
    "MILITARISM": 15,
    "MODERNISM": 16,
    "NATIONALISM": 17,
    "PACIFISM": 18,
    "PARTISANSHIP": 19,
    "PLURALISM": 20,
    "POPULISM": 21,
    "SECULARISM": 22,
    "THEOCRACY": 23
  }
)

// TESTING DATA
var testQuestion = {
  text: 'Test question Test question Test question Test question Test question Test question Test question Test question'
}
//

function replaceQuestion(question) {
  document.getElementById('question-font').innerHTML = question.text;
}

// document.addEventListener('DOMContentLoaded', replaceQuestion(testQuestion), false);
