// Aula 04 - HTTP Server
//var http = require("http");
//
//http.createServer(function(req, res){
//    // Status 200 - Successfully loaded
//    res.writeHead(200, {'Content-Type':'text/plain'});
//    res.end("Hello world!");
//}).listen(8080);
//
//console.log("Servidor rodando na porta 8080");

var express = require("express");
var app = express();

app.use(express.static(__dirname+'/aula04_05_www'));
app.listen(8080);