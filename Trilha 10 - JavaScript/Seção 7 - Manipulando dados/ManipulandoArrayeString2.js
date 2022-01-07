// Contar elementos de um array com lenght

console.log(['A','B', 'C', 'D', function () {return "Alo"}].length)

// Acessando a posição 4 do array e executando a função anônima contida nele. 
console.log(['A', 'B', 'C', 'D', function() {return "Alo"},][4]())

// Transformar uma cadeia de caracteres em elementos de um array
// O objeto Array nativo do JS dispõe da função .from  que recebe como parâmetro uma cadeia de caracteres e a transforma em um array

let word =  "Everson"
console.log(Array.from(word))

/*Ultima aula*/

let techs = ["HTML","CSS","JavaScript"]


// Adicionar um item no fim do array 
techs.push("NodeJS")

// Adicionar um item no começo do array 
techs.unshift("SQL")

// Remover um item no fim do array
techs.pop()

// Remover um item no começo do array
techs.shift()

// Pegar somente algumas posições do array
/*O slice espera dois parâmetros, o de inicio (1) e o de fim (3) */
techs.slice(1,3)


// Remover 1 ou mais items em qualquer posição do array
/*O splice espera dois parâmetros, o index de inicio (1) que você deseja remover
e a quantidade (intervalo entre os indicies) que você deseja remover (2) */
techs.splice(1, 2)


// encontrar a posição de um elemento no array
let index = techs.indexOf('CSS')

console.log(techs)