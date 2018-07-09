$(document).ready(function(){
    var hora_escolha_campo;
    $("input").bind("focus",function(){
        var pos = $(this).offset();
        var width = $(this).width();
        
        $(".hora_escolha").css("left", pos.left + width + 5).css("top",pos.top).show();
        
        hora_escolha_campo = $(this);
    });
    
    $("input").bind("blur",function(){
        setTimeout(function(){
            $(".hora_escolha").hide();
        },200);
    });
    
    $(".hora_escolha button").bind("click",function(){
        var hora = $(this).html();
        hora_escolha_campo.val(hora);
    });
});