const http = require('http');

const fileSystem = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, resp){
    fileSystem.readFile('./index.html', function(error, fileContent){
        if(error){
            resp.writeHead(500, {'Content-Type': 'text/plain'});
            resp.end('Error');
        }
        else{
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(fileContent);
            resp.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
