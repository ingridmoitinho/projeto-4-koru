// Desafio: a. Use findIndex para encontrar a posição da primeira tarefa incompleta

const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

const firstTarefFalse = tasks.findIndex((task) => !task.completed );
console.log("Posição da primeira tarefa incompleta:", firstTarefFalse);
