let userId = 0;
let taskId = 0;
let tasks = [];
let  mongoose = require('mongoose');
mongoose.connect('mongodb://backup.baptisteheraud.com/test');

// Définition d’un modèle Cat.
var Cat = mongoose.model('Cat', { name: String });

// Instanciation du modèle en question.
var kitty = new Cat({ name: "toto"});

kitty.save(function (err) {
	 if (err) // ...
	     console.log('meow');
});



exports.getUser =  function (req, res) {
    userId++;
    res.send({id:userId});
};

exports.getId =  function (req, res) {
    let id = req.params.id;
    res.send(id);
};

exports.getTasksByID = function (req, res) {
    let userId = req.params.id;
    let tmp;
    taskstmp = [];
    for (let i = 0; i < tasks.length; i++){
        if (userId == tasks[i].userId) {
            tmp = {id:tasks[i].taskId, name: tasks[i].name}
            taskstmp.push(tmp);
        }
    }
    res.send({task:taskstmp});
};

exports.addTasks = function (req, res) {
    let name = req.body.name;
    let id = req.params.id;
    taskId++;
    tasks.push({userId:id, taskId: taskId, name: name});
    res.send({id:taskId, name: name});
};


exports.deleteTasks = function (req, res) {
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
        res.end();
    }
    else
    {
        res.status(400).send("Task with id '" + id + "' doesn't exist.");
    }
};

exports.updateTasks = function (req, res) {
    let flag = -1;
    let id = req.params.task;
    let name = req.body.name;

    let userId = req.params.id;
    let i;
    for (i = 0; i < tasks.length; i++){
        if (id == tasks[i].taskId && userId == tasks[i].userId) {
            flag = i;
        }
    }
    if (flag != -1){
        tasks[flag].name = name;
        res.send({id:tasks[flag].taskId, name: tasks[flag].name});
    }
    else
    {
        res.status(400).send("Task with id '" + id + "' doesn't exist.");
    }
};
