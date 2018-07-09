$(document).ready(function(){
    $("button").bind("click", function(){
        // Para arquivos locais é melhor o load
//        $(".div").load("aula36_37_teste_ajax.html");
//        
//        $.get("aula36_37_teste_ajax.html", function(data){
//            $(".div").html(data);
//        });

        $.post("aula36_37_teste_ajax.html", function(data){
            $(".div").html(data);
        });
    });
});