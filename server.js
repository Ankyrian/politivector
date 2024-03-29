/// REQUIREMENTS

// Functions
const getQuestions = require("./libs/functions/getQuestions"),
    getArgs = require("./libs/functions/getArgs"),
    ipToCountry = require("./controllers/ipToCountry");

// Middlewares
const localeQueryMiddleware = require("./libs/middlewares/localeQueryMiddleware");

// Dependencies
const express = require("express"),
    http = require("http"),
    path = require("path"),
    cookieParser = require('cookie-parser'),
    i18n = require('i18n'),
    clm = require("country-locale-map");

// Client-side scripts/data
const resultsGenerationFunctions = require("./public/scripts/results_handler"),
    dimensions = require("./public/data/dimensions.js");

// Arguments
const arguments = getArgs();
const port = arguments["port"];

// Database and Models
const dbConnection = require("./controllers/dbConnection");
const dbResultCRUD = require('./controllers/resultsTableOps');


/// i18n

i18n.configure({
    locales: ["en", "tr"], // setup some locales - other locales default to en silently
    defaultLocale: "en", // default locale will be en until changed by user (also defaults for non-existent locale code)
    cookie: "locale", // sets a custom cookie name to parse locale settings from
    // I added queryParameter despite having the cookie since the cookie method requires a refresh to take effect
    queryParameter: 'lang', // query parameter to switch locale (ie. /home?lang=ch) 
    directory: path.join(__dirname, "locales") // where to store json files - defaults to './locales'
});


/// SERVER SETUP

const app = express();

app.set("view engine", "ejs");
app.set('trust proxy', true);

app.use(cookieParser());
app.use(localeQueryMiddleware);
app.use(i18n.init);
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

/// ROUTES

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/plans", (req, res) => {
    res.render("plans.ejs");
})

app.get("/start", (req, res) => {
    res.render("questions.ejs", {questionsTextJSON: getQuestions(i18n.getLocale(req))});
})

app.get("/results", (req, res) => {
    res.render("results.ejs", {
        resultsHandler: resultsGenerationFunctions,
        resultsQuery: req.query,
        dimensions: dimensions
    });
})

app.get("*", (req, res) => {
    res.render("404.ejs");
})

app.post("/record-test-data", (req, res) => {
    let formattedDims = [];
    for (let i = 0; i < req.body.length; i++) {
        formattedDims.push( {"id": i, "value": req.body[i][0], "neutral": req.body[i][1]} );
    }
    
    ipToCountry(req.ip)
        .then(countryData => {
            if (!countryData)
                return;
            const countryName = countryData["country"];
            const countryNumeric = clm.getNumericByName(countryName);
            dbResultCRUD.createResult(countryNumeric, 0, formattedDims);
        })
        .catch(err => console.log(err))
        .then(() => res.sendStatus(200));
});