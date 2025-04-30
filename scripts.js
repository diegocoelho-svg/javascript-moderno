// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Diego Coelho", "diego@gmail.com"]

// desestruturando array
const [username, email] = data
console.log("Nome:", username)
console.log("email:", email)

const fruits = ["Qualquer Coisa", "Apple", "Orange"]

// Desestruturar somente o primeiro - Não necessariamente precisa estar com o mesmo nome
const [banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação
const [_, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação.
const [, , orange] = fruits
console.log(orange)