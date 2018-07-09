function adicionarItem()
{
    var novo_item = document.getElementById("novo_item").value;
    var listaHtml = document.getElementById("lista").innerHTML;
    
    listaHtml = listaHtml + "<li>"+novo_item+"</li>";
    
    document.getElementById("lista").innerHTML = listaHtml;
    
}