let  mongoose = require('mongoose');
let  userModel = require('./Model/User');
let  taskModel = require('./Model/Task');
let  database = require('./database');
//mongoose.connect('mongodb://backup.baptisteheraud.com/TP10');

exports.getUser =  function (req, res) {
  var Guest = new userModel({ roles: "User"});
    Guest.save()
    .then(doc => {
        console.log(doc);
        res.send({id:doc['_id']});
    })
    .catch(err => {
      res.status(400).send({erreur:"impossible d'enregister dans la base de données"});
    })
};

exports.getId =  function (req, res) {
    let id = req.params.id;
    res.send(id);
};

exports.getTasksByID = function (req, res) {
    let userId = req.params.id;

    taskModel.find({
      userId: userId
    })
    .then(doc => {
      console.log(doc)
      taskstmp = [];
      for (let i = 0; i < doc.length; i++){
        tmp = {id:doc[i]._id, name: doc[i].name}
        taskstmp.push(tmp);

        }
          res.send({task:taskstmp});
    })
    .catch(err=> {
      res.status(400).send({erreur:"impossible de lire dans la base de données"});
    })
};

exports.addTasks = function (req, res) {
  let name = req.body.name;
  let id = req.params.id;

  var TaskValue = new taskModel({ userId: id, name: name});
    TaskValue.save()
    .then(doc => {
        console.log(doc);
        res.send({id:doc['_id'], name: name});
    })
    .catch(err => {
      res.status(400).send({erreur:"impossible d'enregister dans la base de données"});
    })
};


exports.deleteTasks = function (req, res) {

    let id = req.params.task;
    let userId = req.params.id;

    taskModel.findOneAndRemove({
      _id :id,
      userId: userId
    })
    .then(doc => {
        console.log(doc);
        if (doc == null){
          res.status(400).send("Task with id '" + id + "' doesn't exist.");
        }
        res.end();
    })
    .catch(err => {
      res.status(400).send({erreur:"impossible d'enregister dans la base de données"});
    })
};

exports.updateTasks = function (req, res) {

    let id = req.params.task;
    let name = req.body.name;

    let userId = req.params.id;

    taskModel.findOneAndUpdate({
      _id :id,
      userId: userId
    },
    {
      name: name
    },
    {
      new : true
    })
    .then(doc => {
        console.log(doc);
        res.send({id:doc._id, name: doc.name});
    })
    .catch(err => {
      res.status(400).send("Task with id '" + id + "' doesn't exist.");
    })
};
