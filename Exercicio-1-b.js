// Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

function combineArrays(...arrays) {
  return [].concat(...arrays);
}

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const resultado = combineArrays(a, b, c);

console.log(resultado);
