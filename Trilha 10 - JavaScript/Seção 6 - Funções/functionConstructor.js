/*
    Function() constructor

    * utiliza-se a expressão new
    * Ela cria um novo objeto
    * this é uma palavra chave que é utilizada para referênciar a instância criada com a expressão new
*/


function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const everson = new Person('Everson') // Estou intanciando a function Person, Everson está sendo passado com o um argumento para name
const jao = new Person('Jão')
console.log(everson.walk())
console.log(jao.walk())
