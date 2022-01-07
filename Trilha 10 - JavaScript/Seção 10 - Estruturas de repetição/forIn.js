// For in cria um loop a partir de um objeto, pegando as propriedades deste objeto

let person = {
    name: 'Everson',
    age: 22,
    weight: 88.6
}


for(let property in person){
    console.log(property) // Imprimindo a propriedade
    console.log(person[property]) // Imprimendo o valor da propriedade
}