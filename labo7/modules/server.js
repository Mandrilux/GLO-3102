function start(app){
    let hostname = '0.0.0.0';
    let port = 8080;
    app.listen(port, hostname);
    console.log('Listening on port 8080....');
}

exports.start = start
