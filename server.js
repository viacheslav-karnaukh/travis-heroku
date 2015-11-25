var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var basePath = path.join(process.cwd(), 'prod');
var port = process.env.PORT || 3000;

http.createServer(function(req, res) {
    var filePath = path.join(basePath, req.url);

    function handleError(code, message) {
        console.log([
            new Date().toTimeString().slice(0,8),
            http.STATUS_CODES[code],
            message
        ].join(' '));
        res.writeHead(code, {'Content-Type': 'text/html'});
        res.end('<h1>' + http.STATUS_CODES[code] + '</h1><h3>' + message + '</h3>');
    }

    if ('/' === req.url) {
        fs.createReadStream(path.join(basePath, 'index.html')).pipe(res);
    } else if ('/all.min.js' === req.url || '/all.min.css' === req.url) {
        res.writeHead(200, {'Content-Type': mime.lookup(filePath)});
        fs.createReadStream(filePath).pipe(res);
    } else {
        handleError(404, req.headers.host + req.url);
    }
}).listen(port);

console.log([
    'Server started at http://localhost:' + port,
    'Running on Node ' + process.version
].join('\n'));