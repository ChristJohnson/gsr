
"use strict";

var express = require("express");
var https = require("https");
var http = require("http");
var nunjucks = require("nunjucks");

const HTTP_PORT = 80;
const HTTPS_PORT = 443;

var app = express();


app.engine('html', nunjucks.render);
app.set('view engine', 'html');


nunjucks.configure('tmpl', {
    autoescape: true,
    express: app,
    watch: true,
});

app.get('/', function(req, res) {
    res.render('index');
});

http.createServer(app).listen(HTTP_PORT);
https.createServer(app).listen(HTTPS_PORT);
