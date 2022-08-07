/// FUNCTIONS

function getArgs() {
    const arguments = process.argv.slice(2);
    let argDict = {};

    arguments.forEach(arg => {
        let keyValue = arg.split("=")
        argDict[keyValue[0]] = keyValue[1];
    });
    return argDict;
}

function getQuestions(locale) {
    let questions;
    if (!locale || locale == "en") {
        questions = questionsTextEN;
    } else if (locale == "tr") {
        questions = questionsTextTR;
    }
    return JSON.stringify(questions);
}

/// MIDDLEWARES

function detectLocaleQuery(req, res, next) {
    if (req.query.lang) {
        res.cookie("locale", req.query.lang, { maxAge: 90000000, httpOnly: true });
    }
    next();
}

/// REQUIREMENTS

const express = require("express"),
    http = require("http"),
    path = require("path"),
    cookieParser = require('cookie-parser'),
    i18n = require('i18n');

const arguments = getArgs();
const port = arguments["port"];
const app = express();

const questionsTextEN = require("./public/data/questions_text_en.json"),
    questionsTextTR = require("./public/data/questions_text_tr.json"),
    resultsGenerationFunctions = require("./public/scripts/results_handler"),
    dimensions = require("./public/data/dimensions.js");

/// i18n

i18n.configure({
    locales: ["en", "tr"], // setup some locales - other locales default to en silently
    defaultLocale: "en", // defualt locale will be en until changed by user (also defaults for non-existent locale code)
    cookie: "locale", // sets a custom cookie name to parse locale settings from
    // I added queryParameter despite having the cookie since the cookie method requires a refresh to take effect
    queryParameter: 'lang', // query parameter to switch locale (ie. /home?lang=ch) 
    directory: path.join(__dirname, "locales") // where to store json files - defaults to './locales'
});

/// SERVER SETUP

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(detectLocaleQuery);
app.use(i18n.init);
app.use(express.static(path.join(__dirname, "/public")));

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

/// ROUTES

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/future", (req, res) => {
    res.render("future_plans.ejs");
})

app.get("/start", (req, res) => {
    res.render("questions.ejs", {questionsTextJSON: getQuestions(req.cookies.locale)});
})

app.get("/results", (req, res) => {
    res.render("results.ejs", {
        resultsHandler: resultsGenerationFunctions,
        resultsQuery: req.query,
        dimensions: dimensions
    });
})

app.get("*", (req, res) => {
    res.sendFile("404.html", {root: "./public"});
})