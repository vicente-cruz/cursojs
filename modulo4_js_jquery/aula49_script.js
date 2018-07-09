$(function(){
    $("#senha").bind("keyup",function(){
        
        var txt = $(this).val();
        var forca = 0; // de 0 a 100
        var aceitacao = "NÃO ACEITA";
        
        // Tem que ter:
        // letras
        // numeros
        // caracteres especiais
        // # minimo de caracteres
        
        if (txt.length > 5) {
            forca += 25;
        }
        
        var reg = new RegExp(/[a-z]/i);
        if (reg.test(txt)) {
            forca += 25;
        }
        
        var reg = new RegExp(/[0-9]/i);
        if (reg.test(txt)) {
            forca += 25;
        }
        
        var reg = new RegExp(/[^a-z0-9]/i);
        if (reg.test(txt)) {
            forca += 25;
        }
        
        if (forca >= 75) {
            aceitacao = "ACEITA";
        }
        
        $("#forca").html("Força:"+forca+"("+txt+") - "+aceitacao);
        
    });
});