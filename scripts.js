const address1 = {
  street: "Av. Brasil",
  number: 20,
}

// Isso não é uma cópia. É uma referência
const address2 = address1
address2.number = 35
console.log(address1, address2)

// Criando um novo objeto, utilizando as propriedades e valores de address1 (Opção 1)
const address3 = { ...address1 }
address3.number = 30
console.log(address1, address3)

const address4 = { ...address1, number: 40 }
console.log(address1, address4)


// Exemplo de referência de Array
const list1 = ["Apple", "Banana"]
const list2 = list1
const list3 = [...list1]

list2.push("Watermelon")
list3.push("Grape")

console.log(list1, list2, list3)