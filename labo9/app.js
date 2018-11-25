const serverDistrib = require('./modules/server');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let cors = require('cors');
let corsOptions = {
    origin : '*',
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
    credentials: true
};

app.use(cors(corsOptions));

app.get('/', function(req, res){
  let id = req.params.id;
  res.sendfile("client/index.html");
});

serverDistrib.start(app);
