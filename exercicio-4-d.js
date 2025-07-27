// Desafio:d. Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe

const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

const Task10 = tasks.findIndex((task) => task.id === 10);

if (Task10 === -1) {
  console.log("Tarefa com id 10 não encontrada.");
} else {
  console.log("Tarefa com id 10 encontrada na posição:", Task10);
}
