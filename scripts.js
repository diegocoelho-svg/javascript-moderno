// O método map() chama a função callback recebida por parametro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

// Percorro os itens do Array
products.map((item) => {
  console.log(item)
})

// Sintaxe reduzida.
products.map((product) => console.log(product))

// Utilizando o novo objeto retornado.
const formatted = products.map((product) => {
  return {
    id: Math.random(),
    description: product,
  }
})

console.log(formatted)