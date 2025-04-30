// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3]
console.log(numbers)

// Spread
console.log(...numbers)

const data = [
  {
    name: "Diego",
    email: "diego@gmail.com",
    avatar: "d.png"
  },
  {
    name: "João",
    email: "joao@gmail.com",
    avatar: "j.png"
  }
]

console.log(data)
console.log(...data)