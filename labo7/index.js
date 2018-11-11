let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();

const server = require('./modules/server');
const tasksManager = require('./modules/tasks');


let corsOptions = {
    origin : '*',
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
    credentials: true
};

app.use(bodyParser());
app.use(cors(corsOptions));


app.post('/users', tasksManager.getUser);
app.get('/:id', tasksManager.getId);
app.get('/:id/tasks', tasksManager.getTasksByID);
app.post('/:id/tasks', tasksManager.addTasks);
app.delete('/:id/tasks/:task', tasksManager.deleteTasks);
app.put('/:id/tasks/:task', tasksManager.updateTasks);
server.start(app);
