$(document).ready(function(){
    $("#form").bind("submit",function(e){
        // igual a onsubmit="return false"
        e.preventDefault();
        
        console.log("Evento de submit!");
    });
    
    // Ao selecionar o que foi escrito
//    $("#nome").bind("select",function(){
//        console.log("Evento de seleção!");
//    });
    
    $("#nome, #email").bind("focus",function(){
        $(this).addClass("focado");
    });
    
    $("#nome, #email").bind("blur",function(){
        $(this).removeClass("focado");
    });
    
    // Para selects, checkboxes, radiobuttons...
    $("#idade").bind("change",function(){
        console.log($(this).val());
    });
});