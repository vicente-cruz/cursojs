$(document).ready(function(){
//    $(".botao").bind("click", function(){
//        $(".div").animate({
//            "border-radius":75,
////            "top":"50px",
//            "left":"700px",
//            "height":"50px",
//            "width":"50px"
//        },{
//            duration:1500,
//            start:function(){
//                console.log("Inicio animação!");
//            },
//            step:function(){
//                console.log("Nova etapa");
//            },
//            complete:function(){
////                console.log("Fim animação!");
//                $(".div").animate({
//                    "border-radius":0,
//                    "width":"150px",
//                    "height":"150px",
//                    "line-height":"150px",
////                    "top":"0px",
//                    "left":"0px"
////                    "height":"50px",
////                    "width":"50px"                    
//                },1500);
//            }
//        });        
//    });

    $("#btnDir").bind("click",function(){
        $(".div").animate({
            "margin-left":"+=50"
        },1000);
    });

    $("#btnEsq").bind("click",function(){
        $(".div").animate({
            "margin-left":"-=50"
        },1000);
    });
    
    $("#btn2").bind("click",function(){
        $(".div").stop();
    });
});