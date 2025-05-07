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

async function fetch() {
  try {
    const response = await asyncFunction()
    console.log("Sucesso:", response)
  } catch (error) {
    console.log("Erro:", error) // Pega o bloco do reject
  } finally {
    console.log("Fim da Execução!")
  }
}

async function fetch() {
  const response = await asyncFunction()
  console.log(response)
}

const fetch = async () => {
  const response = await asyncFunction()
  console.log(response)
}

fetch()