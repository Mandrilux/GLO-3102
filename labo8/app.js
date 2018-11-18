let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let cookieParser = require('cookie-parser');
let app = express();
let userId = 0;
var users = []

const server = require('./modules/server');

let corsOptions = {
    origin : '*',
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
    credentials: true
};

app.use(bodyParser());
app.use(cookieParser());
app.use(cors(corsOptions));

app.get('/login', function(req, res){
    let id = req.param.id;
    res.sendfile("client/login.html");
});

app.post('/users', function(req, res){
  let user = req.body.user
  let password = req.body.password
  let userStorage = { username : user, password: password, id : userId }
  users.push(userStorage);
  userId++;
  res.status(200).send({user:users});
});

app.post('/login', function(req, res){
    let user = req.body.user
    let password = req.body.password
    let flag = 0;
    let idrtn;
    for(var i = 0; i < users.length; i++) {
      var obj = users[i];
      if (user === obj.username && password === obj.password){
        flag = 1;
        idrtn = obj.id;
      }
  }
    if (flag){
      console.log("OK");
      res.status(200).send({id:idrtn});
    }
    else{
      console.log("KO");
      res.status(401).send({});
    }
});

server.start(app);
