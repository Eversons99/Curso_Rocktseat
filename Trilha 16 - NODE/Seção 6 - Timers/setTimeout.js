// setTimeout Vai rodar uma função após um determinado tempo que é medido atráves de milissegundos
const timeOut = 3000
const finished = () => console.log("Done!")

// O setTimeout pede dois argumentos
setTimeout(finished, timeOut)

// O parâmetro finished não foi passado como uma função pq senão a função seria executada imediatamente, então neste caso o finished esta sendo passado como uma refêrencia
// A function finished é uma função callback

console.log("Mostrar")
