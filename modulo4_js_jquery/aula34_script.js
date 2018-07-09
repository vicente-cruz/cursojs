$(document).ready(function(){
    $(".botao").bind("click",function(){
        $(".div").animate({
            "margin-left":"100px",
            "margin-top":"20px",
            "width":"500px",
            "border-radius":"75px"
        }, 500);
    });
});