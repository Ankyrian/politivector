var dimensionScores = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

var randomizedQuestions;
var currentQuestion;
var currentIndex = -1;
var changesHistory = [];
var questionsText;
var quizEnded = false;

function questionPageInit(questionsJSON) {
    questionsText = JSON.parse(questionsJSON);
    randomizedQuestions = shuffle(questions);
    nextQuestion();
    backButtonSet();
}

function questionAnswered(choice) {
    dimensionId = currentQuestion.dimension;
    switch (choice) {
        case 0:
            addScores(dimensionId, currentQuestion.aa);
            break;
        case 1:
            addScores(dimensionId, currentQuestion.pa);
            break;
        case 2:
            addScores(dimensionId, currentQuestion.n);
            break;
        case 3:
            addScores(dimensionId, currentQuestion.pd);
            break;
        case 4:
            addScores(dimensionId, currentQuestion.ad);
            break;
        default:
            console.log("Unrecognized choice ID!");
            break;
    }
    if(currentIndex + 1 >= randomizedQuestions.length) {
        initializesResults();
    }
    else {
        nextQuestion();
    }
}

function nextQuestion() {
    currentIndex++;
    backButtonSet();
    currentQuestion = randomizedQuestions[currentIndex];
    document.getElementById('question-font').innerHTML = questionsText[currentQuestion.text];
    document.getElementById('question-number').innerHTML = `${questionsText.question} ${currentIndex + 1} / ${questions.length}`
}

function addScores(dimensionId, scoreArr) {
    var addedScore = scoreArr[0];
    changesHistory[currentIndex] = [dimensionId, addedScore, 0];
    dimensionScores[dimensionId][0] += addedScore;
    if(scoreArr.length == 2) {
        neutralScore = scoreArr[1];
        changesHistory[currentIndex][2] = neutralScore;
        dimensionScores[dimensionId][1] += neutralScore;
    }
}

function postTestData() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "record-test-data");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(dimensionScores));
}

function initializesResults() {
    if (quizEnded)
        return;

    quizEnded = true;

    postTestData();

    var generatedUrl = `/results?0=${dimensionScores[0][0]},${dimensionScores[0][1]}`;
    for(var i = 1; i < dimensionScores.length; i++) {
        generatedUrl += `&${i}=${dimensionScores[i][0]},${dimensionScores[i][1]}`
    }
    location.href = generatedUrl;
}

function previousQuestion() {
    if(currentIndex >= 1) {
        currentIndex--;
        backButtonSet();
        var history = changesHistory[currentIndex];
        dimensionScores[history[0]][0] -= history[1];
        dimensionScores[history[0]][1] -= history[2];
        currentQuestion = randomizedQuestions[currentIndex];
        document.getElementById('question-font').innerHTML = questionsText[currentQuestion.text];
        document.getElementById('question-number').innerHTML = `${questionsText.question} ${currentIndex + 1} / ${questions.length}`
    }
}

// Fisher–Yates Shuffle
function shuffle(arr) {
    var current = arr.length;
    var next = 0;

    while (0 !== current) {
        next = Math.floor(current * Math.random());
        current--;
        [arr[current], arr[next]] = [arr[next], arr[current]];
    }
    return arr;
}

function backButtonSet() {
    var backButtonStyle = document.getElementById("back").style;
    if(currentIndex == 0) {
        backButtonStyle.visibility = "hidden";
    }
    else if(currentIndex == 1){
        backButtonStyle.visibility = "visible";
    }
}