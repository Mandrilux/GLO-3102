let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();

let userId = 0;
let taskId = 0;
let tasks = [];
let corsOptions = {
    origin : '*',
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
    credentials: true
};

app.use(bodyParser());
app.use(cors(corsOptions));

app.post('/users', function (req, res) {
     userId++;
     res.send({id:userId});
});

app.post('/:id/tasks', function (req, res) {
    let name = req.body.name;
    let id = req.params.id;
    taskId++;
    tasks.push({userId:id, taskId: taskId, name: name});
    res.send({id:taskId, name: name});
});

app.get('/:id', function (req, res) {
    let id = req.params.id;
    res.send(id);
});


app.listen(8080, '0.0.0.0')
console.log('Listening on port 8080....');
