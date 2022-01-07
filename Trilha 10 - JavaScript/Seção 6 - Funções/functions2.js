/*
//No JS é possível declarar functions dentro de varíaveis
const sum = function(number1, number2){ //Function anonymous, com parametros number1 e number2
    console.log(number1 + number2)
} 

sum(2,5) // Chamando a function sum e passando arguments
*/



const sum = function (number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)