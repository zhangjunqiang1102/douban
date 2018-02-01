let express = require('express');
let app = express();
let fs = require('fs');
let session = require('express-session');
app.listen(3000);
// let bodyParser = require('body-parser');
// app.use(bodyParser.json());//

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send();
    else next();
});

let read = (p, fn) => {
    fs.readFile(p, 'utf-8', (err, data) => {
        if (err) {
            fn({code: 0, err: 'file does not exist!'})
        } else {
            fn(JSON.parse(data))
        }
    })
};

let home = require('./mock/home');

app.get('/home', (req, res) => {
    read('./mock/home.json', (data) => {
        res.end(JSON.stringify(data))
    })
});
let book = require('./mock/book');

app.get('/book', (req, res) => {
    console.log('1');
    read('./book.json', (data) => {
        res.end(JSON.stringify(data))
    })
});
let movie = require('./mock/home');

app.get('/home', (req, res) => {
    console.log('1');
    read('./mock/movie.json', (data) => {
        res.end(JSON.stringify(data))
    })
});

let radio = require('./mock/radio');

app.get('/radio', (req, res) => {

    read('./mock/radio.json', (data) => {
        res.end(JSON.stringify(data))
    })
});

let group = require('./mock/group');

app.get('/group', (req, res) => {
    console.log(1);
    read('/group.json', (data) => {
        res.end(JSON.stringify(data))
    })
});
