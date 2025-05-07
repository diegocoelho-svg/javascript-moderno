// setTimeout() Será executada após um intervalo de tempo especificado.

setTimeout(() => {
  console.log("Olá, tudo bem?")
}, 5000); //tempo em milissegundos



// setInterval() executa uma função após um intervalo de tempo especificado. Diferente do timeout, ele executa a cada (tempo estimado)

let value = 10

const interval = setInterval(() => {
  console.log(value)
  value--
  if(value === 0) {
    console.log("Feliz Ano Novo")

    // Interrompe o intervalo de execuções.
    clearInterval(interval)
  }
}, 1000);

