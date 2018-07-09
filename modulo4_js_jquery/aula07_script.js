/**
 * Apertar F12 -> Abrir o Console e executar:
 * $("#teste_div").html("Novo texto!"); -> Vai eliminar tudo e colocar "Novo texto!"
 * $("#teste_div").html("<button>Novo botão</button>");
 * 
 * Pegar o conteúdo de a DIV #teste_div:
 * var texto = $("#teste_div").html();
 * 
 * Pegar conteudo de algum elemento dentro da DIV #teste_div:
 *  $("#teste_div").find("<elemento | classe | id>")
 *  
 * Adicionar classe a um elemento encontrado com 'find'
 * $("#teste_div").find("button").addClass("estilo");
 */
$(document).ready(function(){
    // igual a document.getElementById("teste_div").innerHTML = "Mudando o texto"
    // $("#teste_div").html("Mudando o texto!");
});