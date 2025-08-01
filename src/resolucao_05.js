const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// Resolucao letra E
// Verificar se todos os produtos têm pelo menos uma avaliação (review);

const verifyAllReviews = inventory.every(e => e.reviews.length > 0);
console.log(verifyAllReviews)

//Resolucao letra F
// f. Encontrar o índice do produto "Cafeteira";

const index = inventory.findIndex(e => e.name == "Cafeteira");
console.log(index);

// Resolucao letra G
//g. Encontrar o primeiro produto da categoria "Vestuário";

const vestuarios = inventory.filter(e => e.category == "Vestuário");
console.log(vestuarios[0]);

// Resolucao letra H
// Criar uma função de busca que retorna produtos cujo nome contenha um termo específico

const buscaProduto = (produto) => {
    return inventory.filter(e => e.name.toLowerCase().includes(produto.toLowerCase()));
}
console.log(buscaProduto("cal"));
