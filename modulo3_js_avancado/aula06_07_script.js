function aplicaWebstorage()
{
    if (typeof localStorage.nome === "undefined") {
        localStorage.nome = prompt("Informe o nome: ");
    }

    document.getElementById("info").innerHTML = localStorage.nome;
    
    localStorage.removeItem("nome");
}