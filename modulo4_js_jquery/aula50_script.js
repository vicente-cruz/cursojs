$(function(){
    
    $("button").bind("click",function(){
        var cidade = $("#cidade").val();
        
        var now = new Date();
        var tempURL = "https://query.yahooapis.com/v1/public/yql?format=json&rnd="+ now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() +"&diagnostics=true&callback=?&q=";
        tempURL += "SELECT * FROM weather.forecast WHERE woeid in (SELECT woeid FROM geo.places(1) WHERE text='"+cidade+"') AND u='c'";
        
        console.log(encodeURI(tempURL));
        
        $.ajax({
            url:encodeURI(tempURL),
            dataType:"json",
            type:"GET",
            beforeSend:function(){
                $("#res").html("Carregando...");
            },
            success:function(data){
                if (data !== null && data.query !== null && data.query.results !== null && data.query.results.channel.description !== "Yahoo! Weather Error") {
                    var temp = data.query.results.channel.item.condition.temp;
                    
                    $("#res").html(temp+"ºC");
                }
            },
            error:function(){
                $("#res").html("ERRO!!");
            }
        });
        
    });
    
});