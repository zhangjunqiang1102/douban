let express = require('express');
let app = express();
let session=require('express-session');
app.listen(3000);
let bodyParser = require('body-parser');
app.use(bodyParser.json());//
let crypto = require('crypto');

app.use(session({
    resave:true,
    secret:'1213',
    saveUninitialized:true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send();
    else next();
});
let axios = require('axios');







