$(document).ready(function(){
    $("#altura").mask("0,00");
    $("#peso").mask("000,00");
    
    $("button").bind("click",function(){
        var altura = $("#altura").val();
        var peso = $("#peso").val();
        
        altura = altura.replace(",",".");
        peso = peso.replace(",",".");
        
        var imc = peso / (altura*altura);
        var traducao = "";
        
        if (imc < 16) {
            traducao = "Baixo peso muito grave";
        } else if (imc >= 16 && imc < 16.99) {
            traducao = "Baixo peso grave";
        } else if (imc >= 16.99 && imc < 18.49) {
            traducao = "Baixo peso";
        } else if (imc >= 18.49 && imc < 24.99) {
            traducao = "Peso normal";
        } else if (imc >= 24.99 && imc < 29.99) {
            traducao = "Sobrepeso";
        } else if (imc >= 29.99 && imc < 34.99) {
            traducao = "Obesidade grau I";
        } else if (imc >= 34.99 && imc < 39.99) {
            traducao = "Obesidade grau II";
        } else if (imc >= 40) {
            traducao = "Obesidade grau III (obesidade mórbida)";
        }
        
        $("#resultado").html("Seu IMC é: "+imc+" kg/m² e seu status é:"+traducao);
    })
});