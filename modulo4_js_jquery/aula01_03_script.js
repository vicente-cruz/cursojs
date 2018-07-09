/**
 * Aula 02
 * $ == jquery
 * Diferença entre $ e $()
 * $.acao -> executa ação em geral
 * $(elemento).acao -> ação aplicaca em um elemento
 * 
 * Aula 03 - $(document).ready()
 *  Em JS:
 *      1) <body onload="funcaoAposCarregarPagina()">
 *      2) window.onload = function() { ... }
 */

// Op1
$(document).ready(function(){
    alert("$(document).ready(function() { ... }) funcionando!");
});

// Op2
//$(function(){
//    alert("$(function(){ ... }) funcionando!");
//});

// Op3
//function carregado()
//{
//    alert("Funcao externa funcionando!");
//}
//$(document).ready(carregado);