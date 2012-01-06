var fs = require('fs')
var http = require('http');


var server = http.createServer(function (req, res) {

    if (req.url === '/test') {
        res.writeHead(200);
        res.end(req.headers['user-agent']);
    }

    res.writeHead(200);
    res.end(fs.readFileSync('./index.html', 'utf8'));

}).listen(10080 || process.env.PORT);
