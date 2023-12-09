const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.get("/", function(req, res){
    res.send("Resposta da rota")
});

app.get("/blog/:artigo?", function(req, res) {

    let artigo = req.params.artigo
    if (artigo){
        res.send(`<h2>Artigo ${artigo}</h2>`)
    }else {
        res.send("Bem vindo ao meu blog!")
    }

})

app.get("/canal/youtube", function(req, res) {
    let nome = req.query["nome"]
    if(nome){
        res.send(nome)
    }else {
        res.send("Nenhum canal fornecido")
    }
    
})

app.get("/ola/:nome/:empresa", function(req, res) {
    // REQ => Dados enviados pelo usuário
    // RES => Respostas enviadas para o usuário
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`<h1>Oi ${nome} da ${empresa}</h1>`)
})


app.listen(4000, function (erro) {
    if(erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso")
    }
})
