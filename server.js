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

const arguments = getArgs();
const port = arguments["port"];
const app = express();

/// SERVER SETUP

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: "."});
})
const server = http.createServer(app);
server.listen(port);