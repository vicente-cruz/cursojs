var fs = require('fs');
fs.readFile('aula03_texto.txt', function(err, resp){
    var log = resp.toString();
    var linhas = log.split('\n');
    
    for (var linha in linhas) {
        var partes = linhas[linha].split(' ');
        
        console.log("---------------");
        console.log("DATA: "+partes[0]);
        console.log("TIPO: "+partes[1]);
        console.log("MSG: "+partes[2]);
    }
});