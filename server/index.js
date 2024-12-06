const express = require("express")
const app = express();

app.get("/", function(req, res) {
    res.send("Oi Gabriel");
})

app.get("/contato", function(req, res) {
    res.send("Página de Contato")
})

app.listen(3000, function() {
    console.log("Servidor Iniciado")
})