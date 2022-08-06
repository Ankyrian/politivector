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

/// REQUIREMENTS

const express = require("express");
const http = require("http");
const path = require("path");

const arguments = getArgs();
const port = arguments["port"];
const app = express();

/// SERVER SETUP

app.set("view engine", "ejs"); // for templating

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