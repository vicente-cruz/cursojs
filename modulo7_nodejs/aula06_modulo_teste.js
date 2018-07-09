var Matematica = {
    somar:function(x, y) {
        return x + y;
    },
    subtrair:function(x, y) {
        return x - y;
    },
    multiplicar:function(x, y) {
        return x * y;
    },
    dividir:function(x, y) {
        if (y !== 0) {
            return x / y;
        } else {
            return "ERRO: Divisão por zero!";
        }
    }
};

module.exports = Matematica;