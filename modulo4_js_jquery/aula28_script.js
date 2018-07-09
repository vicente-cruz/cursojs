$(document).ready(function(){
//    $("#nome").bind("keydown", function(e){
//        console.log("Tecla apertada: "+e.keyCode);
//    });
    
//    $("#nome").bind("keyup", function(e){
//        console.log("Tecla solta: "+e.keyCode);
//    });

    $("#nome").bind("keyup", function(e){
        if (e.keyCode == 13) {
            console.log("Enviando: "+$(this).val());
            $(this).val("");
        }
    });
});