let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let cookieParser = require('cookie-parser');
let app = express();
let userId = 0;

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

app.post('/login', function(req, res){
    userId++;
    res.send({id:userId});
});

server.start(app);
