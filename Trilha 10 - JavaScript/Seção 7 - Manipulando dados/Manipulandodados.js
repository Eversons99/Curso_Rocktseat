// Manipulando Strings e números

// Transformar String em número e número em string

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um número (USAMOS O .LENGTH)

let word = "Paralelepipedo"
console.log(word.length)

let numbers  = 1234

console.log(String(numbers).length)


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 435656.55464564
console.log(number.toFixed(2))
/*A funcção toFixed espera receber o número de casas desejadas após a virgula, neste caso duas
Está função(método) está atelada ao obj number*/

let number = 435656.55464564
console.log(number.toFixed(2).replace(".", ","))

/*A função replece realiza a troca de algo, no exmplo acima estou trocando ponto por vírgula */