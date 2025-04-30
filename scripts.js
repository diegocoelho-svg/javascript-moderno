// O strict mode: ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript.
"use strict"

function showMessage() {
  let personName = "Diego Coelho"
  
  console.log("Olá", personName)
}

showMessage()

class Student {
  get point() {
    return 7
  }
}

let student = new Student()
// Tentando mudar uma propridade somente leitura
// student.point = 10 
console.log(student.point)

// Tentando deletar uma propriedade de um objeto que não posso deletar.
// delete window.document

// Quando passamos parametros duplicados, segundo valor sobrepoe sem o strictmode
function sum(a, a, c) {
  return a + a + c
}

const result = sum(1, 3, 2)
console.log(result)