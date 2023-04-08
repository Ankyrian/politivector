const questionsTextEN = require("../../public/data/questions_text_en.json"),
    questionsTextTR = require("../../public/data/questions_text_tr.json")

function getQuestions(locale) {
    let questions;
    if (!locale || locale === "en") {
        questions = questionsTextEN;
    } else if (locale === "tr") {
        questions = questionsTextTR;
    }
    return JSON.stringify(questions);
}

module.exports = getQuestions;