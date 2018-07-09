// De tempo (ms) em tempo ele executa uma funcao
function acao()
{
    document.write("Executou...<br/>");
}

// Executa uma funcao depois de um tempo
//setTimeout(acao,2000);

// Executa uma funcao conforme intervalo
var timer = setInterval(acao,2000);

//Finaliza um setInterval
//clearInterval(timer);