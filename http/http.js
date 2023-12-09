var http = require("http")

http.createServer(function (request, response) {
    response.end("<h1>AAAAA</h1>")
}).listen(8080);
console.log("Meu servidor está rodando")