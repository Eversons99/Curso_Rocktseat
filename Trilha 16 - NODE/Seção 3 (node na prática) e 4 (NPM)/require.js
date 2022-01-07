// Require é uma maneira de utilizar modulos nativos do nodejs ou outros modulos 
//O path é um modulo que já existe dentro do node
console.log(require('path'))

const path = require('path')

//o basename é uma função que pega o nome base de um arquivo, passamos como parâmetro o __filename () que mostra o nome do arquivo que esta sendo executado no momento

console.log(path.basename(__filename))

console.log(path.basename("/Users/starter/docs.js"))


// Importanto modulos não nativos que estão na mesma pasta
const myModule = require('./exports')

console.log(myModule)