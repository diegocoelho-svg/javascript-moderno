const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com"
  }
}

// O javascript em si não impõe restrições à modificação dos objetos
// book.category = "HTML"

// Congela o objeto e impede a modificação
Object.freeze(book)
book.category = "CSS" // Não modifica

// O object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing).
book.author.name = "João"
console.log(book)