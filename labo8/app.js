let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let cookieParser = require('cookie-parser');
let app = express();
const UserManager = require('./modules/user');

const server = require('./modules/server');

let corsOptions = {
    origin : '*',
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
    credentials: true
};

app.use(bodyParser());
app.use(cookieParser());
app.use(cors(corsOptions));

app.get('/login', UserManager.login);

app.post('/users', UserManager.createUser);

app.get('/userprofile', UserManager.secret);

app.get('/', UserManager.index);

app.get('/logout',  UserManager.logout);

app.post('/login', UserManager.loginVerify);

server.start(app);
