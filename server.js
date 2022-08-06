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

app.use(express.static(path.join(__dirname, "/public")));
app.get('/', (req, res) => {
    res.render("index.ejs");
})
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});