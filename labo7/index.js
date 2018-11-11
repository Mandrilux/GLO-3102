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

//on delete la tache
app.delete('/:id/tasks/:task', function (req, res) {
    console.log(tasks);
    let flag = -1;
    let id = req.params.task;
    let userId = req.params.id;

    for (let i = 0; i < tasks.length; i++){
        if (id == tasks[i].taskId && userId == tasks[i].userId) {
            flag = i;
        }
    }
    if (flag != -1){
        tasks.splice(flag, 1);
        console.log(tasks)
    }
    res.send({});
});

// on get les taches

app.get('/:id/tasks', function (req, res) {
    let userId = req.params.id;
    taskstmp = [];
    for (let i = 0; i < tasks.length; i++){
        if (userId == tasks[i].userId) {
            taskstmp.push(tasks[i]);
        }
    }
    console.log(tasks);
    res.send(taskstmp);
});


app.listen(8080, '0.0.0.0')
console.log('Listening on port 8080....');
