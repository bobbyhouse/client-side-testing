var staticServer = require('node-static');

var file = new staticServer.Server('./');

require('http').createServer(function (request, response) {

    request.addListener('end', function() {

        file.serve(request, response);

    }).resume();

}).listen(8080);
