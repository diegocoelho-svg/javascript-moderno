// Método every() testa se todos os elementos passa na condição e retorna um valor boolean.

// Exemplo de array de idades.
const ages = [15, 30, 39, 29]

// verificando se todas as idades são maiores ou igual a 18
const result = ages.every((age) => age >= 18)
console.log(result)