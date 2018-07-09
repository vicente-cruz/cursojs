$(function(){
    var x, y;
    var w, h;
    $("#objeto").bind("mousedown",function(){
        $("#objeto").bind("mousemove",function(e){
            x = e.originalEvent.pageX;
            y = e.originalEvent.pageY;
                        
            w = $(this).width();
            h = $(this).height();
            
            $(this).css("left",(x - (w/2))+"px");
            $(this).css("top",(y - (h/2))+"px");
        });
    });
    
    $("#objeto").bind("mouseup",function(){
        $("#objeto").unbind("mousemove");
    });
});