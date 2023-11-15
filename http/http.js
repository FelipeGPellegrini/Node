var http = require("http")

http.createServer(function (request, response) {
    response.end("<h1>Rodando na porta 8080</h1>")
}).listen(8080);
console.log("Meu servidor está rodando")