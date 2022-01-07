// Impure function

// Exemplo 1: está dependendo do dado(Math) externo que não foi passado como parâmetro

function calculaCircumference(radius){
    return Math.PI * (radius + radius)
}

// Exemplo 2: esta alterando um dado (Objeto pessoa) externo
let person = {
    name: 'Rafael Camarda',
    age: 'jovem'
}

function changeName(name){
    person.name = name
}


// Function pure

//Exemplo 1 
const calculaCircumference = function (pi, radius){
    return pi * (radius + radius)
}

// Mesmo exemplo de cima com uma arrow function
const calculaCircumference = (pi, radius) =>
    pi * (radius + radius)

 
// Exemplo 2
const changePersonName = (person, name) => 
    ({...person, name})


// Uso das reticencias indica que todos os valores passados por 
// parâmetros serão passados para a função como a variável valores que 
// contem um Array de valores