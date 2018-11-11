let userId = 0;
let taskId = 0;
let tasks = [];

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
    taskstmp = [];
    for (let i = 0; i < tasks.length; i++){
        if (userId == tasks[i].userId) {
            taskstmp.push(tasks[i]);
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
        console.log(tasks)
    }
    res.send({});
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
    }
    res.send({});
};
