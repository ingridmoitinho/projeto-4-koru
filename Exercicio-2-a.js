const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];


// a. Usar map para criar um array de strings formatadas como "Nome do produto - Categoria"
const productCategoryStrings = products.map((product) => `${product.name} - ${product.category}`);
console.log("\nProdutos e Categorias:", productCategoryStrings);