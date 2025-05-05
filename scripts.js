const book = {
  title: "Objetos imutáveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com"
  }
}

const updatedBook = {
  ...book,
  title: "Criando um Front-end moderno com HTML",
  category: "html",
  type: "Programming",
}

// Original Intacto
console.log(book)

// Modificado
console.log(updatedBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades.
const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory)