// Aula 03
function Animal()
{
    this.raca = "";
    this.nome = "";
    this.idade = "";
    this.peso = 0;
    
    // Aula 04
    this.fazerXixi = function () {
        console.log("shhhhhh...");
    };
    this.comer = function(kg) {
        for (var i=0; i<kg; i++) {
            this.mastigar();
        }
        this.peso = this.peso + kg;
    };
    
    this.mastigar = function() {
        console.log("nhoc, nhoc...");
    };
}

// Aula 03
var lulu = new Animal();
lulu.raca = "gato";
lulu.nome = "Lulu";
lulu.idade = 20;
lulu.peso = 10;
var xuxu = new Animal();
xuxu.raca = "cao";
xuxu.nome = "Xuxu";
xuxu.idade = 15;
xuxu.peso = 7;