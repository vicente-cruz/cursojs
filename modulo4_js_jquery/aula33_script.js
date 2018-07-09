$(document).ready(function(){
    $(".botao").bind("click",function(){
        $(".div").slideToggle("slow");
    });
    
    $(".hellobar").bind("click",function(){
        $(this).slideUp();
    });
});