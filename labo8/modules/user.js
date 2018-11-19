let userId = 0;
var users = []

exports.login = function(req, res){
    res.sendfile("client/login.html");
};

exports.createUser = function(req, res){
  let user = req.body.user
  let password = req.body.password
  let userStorage = { username : user, password: password, id : userId }
  users.push(userStorage);
  userId++;
  res.status(200).send({user:users});
};

exports.secret = function(req, res){
  const token = req.cookies.token;
  if (token !== 'undefined' && token ) {
    res.sendfile("client/userprofile.html");
  }
  else{
    res.redirect("/login");
  }
};

exports.index =  function(req, res){
  res.redirect("/login");
};

exports.logout = function(req, res){
      res.sendfile("client/logout.html");
};

exports.loginVerify = function(req, res){
    let user = req.body.user
    let password = req.body.password
    let flag = 0;
    let idrtn;
    for(var i = 0; i < users.length; i++) {
      var obj = users[i];
      if (user === obj.username && password === obj.password){
        flag = 1;
        idrtn = obj.id;
      }
  }
    if (flag){
      console.log("OK");
      res.status(200).send({id:idrtn});
    }
    else{
      console.log("KO");
      res.status(401).send({});
    }
};
