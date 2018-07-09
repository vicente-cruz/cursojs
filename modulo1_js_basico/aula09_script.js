function trocarDiv(nome, idade)
{
    var area = document.getElementById("area");
    var texto = prompt("Qual seu sobrenome, "+nome+"?");
    
    area.innerHTML = nome+" "+texto+" possui "+idade+" anos";
}