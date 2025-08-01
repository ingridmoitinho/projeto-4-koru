// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// Imagine que você está criando um sistema para uma loja online. Use os métodos de array para implementar as seguintes funcionalidades:
// d. Verificar se há algum produto sem estoque
const semEstoque = inventory.some(produto => produto.stock === 0);
if (semEstoque) {
    console.log("Há produtos sem estoque.");
}   else {
    console.log("Todos os produtos estão em estoque.");
} 
// imprimir a lista de produtos sem estoque
const produtosSemEstoque = inventory.filter(produto => produto.stock === 0);
console.log("Produtos sem estoque:");
produtosSemEstoque.forEach(produto => {
    console.log(`Produto: ${produto.name}, Preço: R$${produto.price}`);
})