var vez = "X";

function atualizarPlacar()
{
    if (vez === "O") {
        $(".placar img").attr("src","aula53_o.png");
    } else {
        $(".placar img").attr("src","aula53_x.png");
    }
}

function verificarCampeao()
{
    var a1 = $(".a1").attr("data-marcado");
    var a2 = $(".a2").attr("data-marcado");
    var a3 = $(".a3").attr("data-marcado");
    
    var b1 = $(".b1").attr("data-marcado");
    var b2 = $(".b2").attr("data-marcado");
    var b3 = $(".b3").attr("data-marcado");
    
    var c1 = $(".c1").attr("data-marcado");
    var c2 = $(".c2").attr("data-marcado");
    var c3 = $(".c3").attr("data-marcado");
    
    var ganhador = "";
    
    for (var i = 0; i <= 1; i++) {
        var op = (i == 0 ? "O" : "X");
        
        if ((a1 === op && a2 === op && a3 === op) ||
            (b1 === op && b2 === op && b3 === op) ||
            (c1 === op && c2 === op && c3 === op) ||
            (a1 === op && b1 === op && c1 === op) ||
            (a2 === op && b2 === op && c2 === op) ||
            (a3 === op && b3 === op && c3 === op) ||
            (a1 === op && b2 === op && c3 === op) ||
            (a3 === op && b2 === op && c1 === op)) {
            ganhador = op;
        }
    }
    
    if (ganhador !== "") {
        if (ganhador == "O") {
            alert("Ganhador é 'O'!");
        } else {
            alert("Ganhador é 'X'!");
        }
        $(".area").html("");
        $(".area").attr("data-marcado","");
    } else if (a1 != "" && a2 != "" && a3 != "" &&
            b1 != "" && b2 != "" && b3 != "" &&
            c1 != "" && c2 != "" && c3 != "") {
            alert("EMPATOU!");
            
        $(".area").html("");
        $(".area").attr("data-marcado","");
    }
}

$(function(){
    atualizarPlacar();
    
    $(".area").bind("click",function(){
        
        if ($(this).find("img").length === 0) {
            if (vez === "O") {
                $(this).html("<img src='aula53_o.png' border='0' height='50' />");
                $(this).attr("data-marcado","O");
                vez = "X";
            } else {
                $(this).html("<img src='aula53_x.png' border='0' height='50' />");
                $(this).attr("data-marcado","X");
                vez = "O";
            }
        }
        
        atualizarPlacar();
        verificarCampeao();
    });
});