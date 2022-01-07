// clearTimeOut vai cancelar um timeOut
const timeOut = 3000
const finished = () => console.log("Done!")

// O setTimeout pede dois argumentos
let timer = setTimeout(finished, timeOut)

// O parâmetro finished não foi passado como uma função pq senão a função seria executada imediatamente, então neste caso o finished esta sendo passado como uma refêrencia
// A function finished é uma função callback

clearTimeout(timer)
