$(function(){
    $("li").hover(function(){
        $(this).find(".menu2").slideDown(250);
    },function(){
        $(this).find(".menu2").slideUp(250);
    });
});