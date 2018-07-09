$(function(){
    $("#form").bind("submit",function(e){
        e.preventDefault();
        
        var txt = $(this).serialize();
        console.log("Enviando dados:"+txt);
        
        $.ajax({
            type:"POST",
            url:"aula40_ajax.php",
            data:txt,
            dataType:"json",
            success:function(dataJson){
//                console.log("Recebido:"+dataJson);
//                alert("Nome:"+dataJson.nome+"(total letras:"+dataJson.num_letras+") | Senha:"+dataJson.senha);
                if (dataJson.status === "OK!") {
                    alert("Login CORRETO!");
                } else {
                    alert("Login ERRADO!");
                }
            }
        });
        
    });
});