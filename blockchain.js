const Bloco = require('./bloco');

class Blockchain {
    constructor() {
        // ja começa com o bloco gênese
        this.cadeia = [new Bloco(0, 'Bloco gênese', '0')];
    }

    adicionar(dados) {
        const ultimo = this.cadeia[this.cadeia.length - 1];
        // se os dados forem inválidos o Bloco da erro e não chega no push
        const novo = new Bloco(this.cadeia.length, dados, ultimo.hash);
        this.cadeia.push(novo);
    }

    ehValida() {
        for (let i = 1; i < this.cadeia.length; i++) {
            const atual = this.cadeia[i];
            const anterior = this.cadeia[i - 1];

            if (atual.hash !== atual.calcularHash()) {
                return false;
            }
            if (atual.hashAnterior !== anterior.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;
