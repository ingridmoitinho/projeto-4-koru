// Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.age >= 18,
  };
}

const person = { name: "Livia", age: 32 };
const personWithIsAdult = addIsAdult(person);

console.log(personWithIsAdult);
