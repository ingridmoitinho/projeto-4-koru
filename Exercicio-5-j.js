// Encontrar o produto com a maior média de avaliações

function calcularMedias(lista) {
  for (let i = 0; i < lista.length; i++) {
    const produto = lista[i];
    let soma = 0;

    for (let j = 0; j < produto.avaliacoes.length; j++) {
      soma += produto.avaliacoes[j];
    }

    const media = soma / produto.avaliacoes.length;
    produto.averageRating = Number(media.toFixed(2));
  }

  return lista;
}

function maiorMedia(lista) {
  let produtoMaior = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i].averageRating > produtoMaior.averageRating) {
      produtoMaior = lista[i];
    }
  }

  return produtoMaior;
}

const produtos = [
  { nome: "Produto A", avaliacoes: [4, 5, 3] },
  { nome: "Produto B", avaliacoes: [2, 3, 4] },
  { nome: "Produto C", avaliacoes: [5, 5, 4] },
];

const produtosComMedia = calcularMedias(produtos);

for (let i = 0; i < produtosComMedia.length; i++) {
  console.log(
    `Média de ${produtosComMedia[i].nome}: ${produtosComMedia[i].averageRating}`
  );
}

const destaque = maiorMedia(produtosComMedia);

console.log("\nProduto com a maior média:", destaque.nome);
