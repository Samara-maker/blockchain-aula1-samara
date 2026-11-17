const Blockchain = require('./blockchain');

function imprimirCadeia(cadeia) {
    for (const bloco of cadeia) {
        console.log(`#${bloco.indice} | ${bloco.dados} | hash: ${bloco.hash.slice(0, 10)}...`);
    }
}

const registro = new Blockchain();

registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Porto Velho: entregue');
registro.adicionar('Entrega E-003 para Ariquemes: saiu do depósito');

console.log('--- Cadeia de entregas ---');
imprimirCadeia(registro.cadeia);
console.log('Cadeia válida?', registro.ehValida());

console.log('\n--- Tentando cadastrar dados inválidos ---');
try {
    registro.adicionar('E1');
} catch (erro) {
    console.log('Erro:', erro.message);
}

try {
    registro.adicionar('');
} catch (erro) {
    console.log('Erro:', erro.message);
}

try {
    registro.adicionar('Entrega E-004 para Cacoal: ' + 'x'.repeat(80));
} catch (erro) {
    console.log('Erro:', erro.message);
}

console.log('Total de blocos:', registro.cadeia.length);

console.log('\n--- Adulterando a entrega 1 ---');
registro.cadeia[1].dados = 'Entrega E-001 para Ji-Paraná: entregue';
imprimirCadeia(registro.cadeia);
console.log('Cadeia válida?', registro.ehValida());
