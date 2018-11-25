
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

io.on('connection', function(client){
  console.log("Client connected...");
  client.on('join', function(data){
    //  client.emit('message', 'Un utilisateur viens de se connecter au serveur');
  });
  client.on('message', function(data){
    console.log(data);
    client.broadcast.emit('message', data);
  });
});

server.listen(8080);
console.log('Listening on port 8080....');
