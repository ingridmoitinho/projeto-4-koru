// Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"

function adicionarMediaParaProdutos(produtos) {
  const resultado = [];

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    let soma = 0;

    for (let j = 0; j < produto.avaliacoes.length; j++) {
      soma += produto.avaliacoes[j];
    }

    const media = soma / produto.avaliacoes.length;

    const mediaArredondada = Number(media.toFixed(2));

    const produtoComMedia = { ...produto, averageRating: mediaArredondada };
    resultado.push(produtoComMedia);
  }

  return resultado;
}

const produtos = [
  { nome: "Produto A", avaliacoes: [4, 5, 3] },
  { nome: "Produto B", avaliacoes: [2, 3, 8] },
  { nome: "Produto C", avaliacoes: [5, 5, 4] },
];

const resultado = adicionarMediaParaProdutos(produtos);
console.log(resultado);
