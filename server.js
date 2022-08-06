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

/// MIDDLEWARES

function detectLocaleQuery(req, res, next) {
    if (req.query.lang) {
        res.cookie("locale", req.query.lang, { maxAge: 900000, httpOnly: true });
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

/// i18n

i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ["en", "tr"],
    // defualt locale will be en until changed by user (also defaults for non-existent locale code)
    defaultLocale: "en",
    // sets a custom cookie name to parse locale settings from
    cookie: "locale",
    // query parameter to switch locale (ie. /home?lang=ch) 
    // I added this despite having the cookie since the cookie method requires a refresh to take effect
    queryParameter: 'lang',
    // where to store json files - defaults to './locales'
    directory: path.join(__dirname, "locales")
});

/// SERVER SETUP

app.set("view engine", "ejs"); // for templating

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
    res.render("questions.ejs");
})

app.get("/results", (req, res) => {
    res.render("results.ejs");
})

app.get("*", (req, res) => {
    res.sendFile("404.html", {root: "./public"});
})