const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about_me', function(req, res) {
    res.sendFile(path.join(__dirname + '/about_me.html'));
});

app.get('/professional_experience', function(req, res) {
    res.sendFile(path.join(__dirname + '/professional_experience.html'));
});

app.get('/portfolio', function(req, res) {
    res.sendFile(path.join(__dirname + '/portfolio/index.html'));
});

app.get('/portfolio/harvard_referencing', function(req, res) {
    res.sendFile(path.join(__dirname + '/portfolio/harvard_referencing/index.html'));
});

app.listen(8000);
require('child_process').exec('start http://localhost:8000');
console.log('Test server running!');