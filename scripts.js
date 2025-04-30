// O método filter() cria um novo array com todos os elementos que passaram na condição.

const words =  ["Javascript", "HTML", "CSS", "Web"]

// Filtrando palavras que tenham mais do que 3 letras
const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Monitor", price: 1100, promotion: true },
  { description: "Mouse", price: 50, promotion: false },
]

// Exemplo, produtos em promoção:
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)

const promotion2 = products.filter((product) => {
  if(product.promotion === false) { // Se esse produto não está em promoção, então quero ele no novo array.
    return true
  }
  return false
})

console.log(promotion2)