$(function(){
    var img;
    var width, height;
    
    $("a.galeria").bind("click",function(){
        img = $(this).find("img").attr("src");
        
        console.log(width+" "+height);
        
        $(".imgbox img").attr("src", img);
        $(".bgbox, .imgbox").fadeIn("fast");
    });
    
    $(".bgbox, .imgbox, button").bind("click", function(){
        $(".bgbox, .imgbox").fadeOut("fast");
    });
});