// Função que retorna uma promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout(() => {
      const isSuccess = true

      if(isSuccess) {
        resolve("A operação foi concluída com sucesso!")
      } else {
        reject("Algo deu errado")
      }
    }, 3000) // Simula uma operação que leva 3 segundos
  })
}
// Visualizando que o retorno é uma promise.
// console.log(asyncFunction())

console.log("Executando função assíncrona...")

// Quando a Promise for resolvida, execute ESTA função (Função dentro de função = Callback Function) com o resultado.
asyncFunction().then((response) => {
  console.log("Sucesso:", response)
}).catch((error) => {
  console.log("Error:", error)
}).finally(() => {
  console.log("Fim da execução")
}) 