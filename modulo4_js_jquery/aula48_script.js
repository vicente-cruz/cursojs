var placar = 0;

function adicionarBola()
{
    var x, y, cor;
    var bola = $("<div class='bola'></div>");
    
    // Azul, vermelho, amarelo, preto, verde
    
    x = Math.floor(Math.random()*800);
    y = Math.floor(Math.random()*500);
    cor = Math.floor(Math.random()*4);
    
    switch(cor) {
        case 0:
            bola.css("background-color","red");
            break;
        case 1:
            bola.css("background-color","green");
            break;
        case 2:
            bola.css("background-color","blue");
            break;
        case 3:
            bola.css("background-color","yellow");
            break;
        case 4:
            bola.css("background-color","black");
            break;
    }
    
    bola.css("left",x+"px");
    bola.css("top",y+"px");
    bola.bind("click",function(){
        $(this).fadeOut("fast");
        placar++;
        atualizarPlacar();
    });
    
    //Assim :
    //$("<div class='bola'></div>").appendTo(document.body);
    
    // Ou assim:
    //$(document.body).append("<div class='bola'></div>");
    
    $(document.body).append(bola);
}

function atualizarPlacar()
{
    $("#placar").html(placar);
}

$(function(){
    $("#comecar").bind("click",function(){
        setInterval(adicionarBola, 1000);
    });
});