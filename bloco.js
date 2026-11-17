const crypto = require('crypto');

class Bloco {
    constructor(indice, dados, hashAnterior) {
        // valida antes de guardar
        if (typeof dados !== 'string' || dados.trim().length === 0) {
            throw new Error('Os dados da entrega são obrigatórios.');
        }
        if (dados.length < 3) {
            throw new Error('Os dados da entrega devem ter no mínimo 3 caracteres.');
        }
        if (dados.length > 80) {
            throw new Error('Os dados da entrega devem ter no máximo 80 caracteres.');
        }

        this.indice = indice;
        this.dados = dados;
        this.hashAnterior = hashAnterior;
        this.hash = this.calcularHash();
    }

    calcularHash() {
        const texto = this.indice + this.dados + this.hashAnterior;
        return crypto.createHash('sha256').update(texto).digest('hex');
    }
}

module.exports = Bloco;
