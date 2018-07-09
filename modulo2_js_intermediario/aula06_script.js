var dt = new Date();
var semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

console.log(dt.getDate()+"/"+(dt.getMonth() + 1)+"/"+dt.getFullYear()+" - Dia da semana: "+semana[dt.getDay()]+" - "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds());