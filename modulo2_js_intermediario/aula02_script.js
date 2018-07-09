function apertouTecla(event)
{
    // event.shiftKey / ctrlKey / altKey
    if (event.shiftKey == true) {
        console.log("Apertou a tecla com shift: "+event.keyCode);
    } else {
        console.log("Apertou a tecla: "+event.keyCode);
    }
}

function soltouTecla(event)
{
    console.log("Soltou a tecla: "+event.keyCode);
}

function pressionouTecla(event)
{
    console.log("Pressionou a tecla: "+event.keyCode);
}