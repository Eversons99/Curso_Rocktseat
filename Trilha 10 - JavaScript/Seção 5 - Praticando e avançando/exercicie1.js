// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variavel acima ? Undefined

console.log(typeof(weight))


/* 
    3. Declare uma varíavel e atribua valores para cada um dos dados:
        * name: Sring
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/

let name = "Everson"
let age = 32
let stars = 10.5
let isSubscribed = true

// 4. A variável student abaixo é d eque tipo de dados ? Object
// let student = {};


// 4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3


let student = {
    name: "Everson",
    age: 32,
    stars: 10.5,
    isSubscribed: true,
    weight: 80
}

// 4.2 Mostre no console a seguinte mensagem:
/*
    <name> de idade <age> pesa <weight> kg. 
*/

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

// 5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente um Array vazio

let students= []

// 6. Retribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o object, mas usar o objeto criado e inserir ele no array)
 students = [student]

// 7. Coloque no console o valor da posição zero do array acima

console.log(students)

// 8.Crie um novo student e coloque na posição 1 do array students

const john = {
    name: "Everson",
    age: 32,
    stars: 10.5,
    isSubscribed: true,
    weight: 80
}

students = [student, john]

console.log(students, john)