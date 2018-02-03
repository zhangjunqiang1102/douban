let express = require('express');
let path = require("path");
let app = express();
let fs = require('fs');
let session = require('express-session');
app.listen(3000);

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(session({
  resave:true,
  saveUninitialized:false,
  secret:'zfpx'
}));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send();
    else next();
});
app.use(express.static(path.resolve(__dirname,"./mock")));
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
    setTimeout(()=>{
        read('./mock/home.json', (data) => {
            res.end(JSON.stringify(data))
        })
    },2500)

});


let book = require('./mock/book');

app.get('/book', (req, res) => {
    read('./mock/book.json', (data) => {
        setTimeout(()=>{res.end(JSON.stringify(data))},1200);
    })
});


let movie = require('./mock/movie');
app.get('/book/:id', (req, res) => {
    let {id} = req.params;
    read('./mock/book.json', (data) => {
        data.forEach(item => {
            let itemdata = item.bookItems.find(item => item.bookId === id) || {};
            if (JSON.stringify(itemdata) !== "{}") {
                res.end(JSON.stringify(itemdata))
            }
        })
    })
});


app.get('/movie', (req, res) => {
    read('./mock/movie.json', (data) => {
        setTimeout(()=>{res.end(JSON.stringify(data))},1200);
    })
});

app.get('/movie/:id', (req, res) => {

    let {id} = req.params;
    read('./mock/movie.json', (data) => {

        data.forEach(item => {
            let itemdata = item.moiveItems.find(item => item.movieId === id) || {};
            if (JSON.stringify(itemdata) !== "{}") {
                res.end(JSON.stringify(itemdata))
            }
        })
    })
});

let radio = require('./mock/radio');
app.get('/radio', (req, res) => {
    read('./mock/radio.json', (data) => {
        setTimeout(()=>{res.end(JSON.stringify(data))},1500);
    })
});


let group = require('./mock/group');
app.get('/group', (req, res) => {

        read('./mock/group.json', (data) => {
            res.end(JSON.stringify(data))
        })


});

let sliders = require('./mock/sliders');
app.get('/sliders', (req, res) => {
    setTimeout(()=>{
        read('./mock/sliders.json', (data) => {
            res.end(JSON.stringify(data))
        })
    },500)
});



let userList = []; // 用户信息
let crypto = require('crypto');

app.post('/profile', function (req, res) {
    let {username, password,} = req.body;
    let user = userList.find(item => item.username == username);
    if (user) {
        res.json({user: null, msg: '用户已存在!!', success: '', err: 1});
    } else {
        password = crypto.createHash('md5').update(password).digest('base64');
        userList.push({username, password});
        res.json({user: null, msg: '', success: '恭喜你注册成功', err: 0});
    }
});
app.post('/login', function (req, res) {
    let {username, password} = req.body;

  password = crypto.createHash('md5').update(password).digest('base64');
    let user = userList.find(item => (item.username === username) && (item.password === password));
    if (user) {
        req.session.user = username;
        res.json({user: username, msg: '', success: '恭喜登录成功', err: 0});
    } else {
        res.json({user: null, msg: '用户名或密码不正确', success: '', err: 1});
    }
});
app.get('/validate', function (req, res) {
    res.json({user: req.session.user, msg: '', err: 0, success: ''});
});


