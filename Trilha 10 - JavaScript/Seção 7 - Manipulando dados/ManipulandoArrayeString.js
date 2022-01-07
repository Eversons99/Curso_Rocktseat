//Manipulando Strings e Arrays

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posiçao do array. 
Depois disso, transforme o array em texto onde eram espaços, coloque _*/

let phrase = "Meu nome é Everson Alves"
let myArray = phrase.split(" ")  /*Split recebe como argumento o que vc quer separar e joga dentro de um array,
 neste caso estou separando a frase por espaços, os parametro e ignorado durante a separação */

let phraseWithUnderscore = myArray.join("_") /*O join junta os dados do array (transforma em string) e como argumento você define qual será o espaçamento entre esses dados*/
console.log(phraseWithUnderscore)



//Verificar se um texto possui alguma palavra em específico

/* O método includes() verifica se algo que foi passado com parametro existe, neste caso abaixo estou verificando se existe a palavra terça na string phraseTeste*/
let phraseTeste = "Hoje ainda é terça feira"
console.log(phraseTeste.includes("terça"))


// Criar um array  com constructor
let myArray = ['a', 'b', 'c']
console.log(myArray)

// Criar um array com pisições definidas
let myArray = ['a', 'b', 'c']
console.log(myArray)

// Criar um array  com constructor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Criar um array com 10posições vazias
let myArray = new Array(10)
console.log(myArray)

// Contar elementos de um array

console.log(['A','B', 'C', 'D', function () {return "Alo"}])

// Contar elementos de um array com lenght

console.log(['A','B', 'C', 'D', function () {return "Alo"}].length)

// Acessando a posição 4 do array e executando a função anônima contida nele. 
console.log(['A', 'B', 'C', 'D', function() {return "Alo"},][4]())

