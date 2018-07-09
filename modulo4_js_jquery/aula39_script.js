$(document).ready(function(){
    $("#form").bind("submit", function(e){
        e.preventDefault();
        
        // Para conseguir enviar os dados!
        var txt = $(this).serialize();
        console.log(txt);
        
        // A requisição ajax!
        $.ajax({
//            type:"GET",
            type:"POST",
            url:"aula39_ajax.php",
            data:txt,
            success:function(resp){
                $(".div").html("Resultado:"+resp);
            },
            error:function(e){
                console.log("ERROR:"+e);
            }
        });
    });
});