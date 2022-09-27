
const https = require("https");

const express = require("express");

const app = express()
const bodyParser = require("body-parser");
const fs = require("fs");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/login", function (req, res) {
    res.send("i-volobuev")
});

app.get("/hour", function (req, res) {
    let date = new Date;
    res.send((date.getHours()).toString())
});

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

https.createServer(options, app).listen(8080, function (req, res) {
    console.log('Server started')
})