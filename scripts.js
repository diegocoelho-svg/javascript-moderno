// Shallow Copy (cópia superficial): Não pega os itens aninhados.
const htmlCourse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@email.co,"}],
}

/* 
const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
}
*/

// Vai modificar o htmlCourse também porque é students é uma referência e não uma cópia 
// jsCourse.students.push({ name: "João", email: "joao@email.com"})


// Deep Copy (cópia profunda)
/*
const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
  students: [...htmlCourse.students],
}

jsCourse.students.push({name: "João", email: "joao@email.com"})

console.log(htmlCourse, jsCourse)
*/

const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
}

jsCourse.students = [
  ...htmlCourse.students,
  { name: "João", email: "joao@email.com" }
]

console.log(htmlCourse, jsCourse)