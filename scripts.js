// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const product = {
  description: "Teclado",
  price: 150
}

const { description, price } = product

function newProduct({description, price}) {
console.log("### NOVO PRODUTO ###")
console.log("Descrição:", description)
console.log("Preço: R$", price)
}

newProduct({
  description: "Mouse",
  price: 70,
})