// Método find() retorna o valor do primeiro elemento do array que satisfaz a condição. Caso o contrário, undefined é retornado

const values = [5 ,12, 8, 130, 44]

const found = values.find((value) => value > 10)
console.log(found)

const products = [
  { name: "Fone", price: 100 },
  { name: "Mouse", price: 60 },
  { name: "Monitor", price: 1100 },
  { name: "Teclado", price: 150 },
]

const productCaro = products.find((product) => product.price > 500)
console.log(productCaro)