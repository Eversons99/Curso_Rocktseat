/*  Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a famíçia esta com o saldo positivo ou negativo, seguido do valor do 
    saldo
*/

/*
    RECEITAS
    Adiantamento: 550
    Salário: 650
    Vale: 220 
    
    DESPESAS
    Faculdade: 130
    Seguro: 70
    Gasolina: 100
    Academia: 70
    Netflix: 30
    Cabelo: 60
    Credito: 30
    Oleo: 40
    Gastos: 150
    */

const gastos = {
    receitas: [550, 650, 220],
    despesas: [130, 70, 100, 70,30, 60, 30, 40, 150]
}
    
    
let receitaTotal = 0 
for (let i = 0; i < gastos.receitas.length; i++){
      receitaTotal += gastos.receitas[i]
}
console.log(`O seu total de receitas é de R$ ${receitaTotal.toFixed(2)}`)

let despesasTotal = 0 
for (let i = 0; i < gastos.despesas.length; i++){
      despesasTotal += gastos.despesas[i]
}
console.log(`O seu total de despesas é de R$ ${despesasTotal.toFixed(2)}`)


function saldo(desp, rec ){
    let saldoFinal = desp - rec
    if(saldoFinal >= 0){
         console.log(`Seu saldo é positivo, o valor total do seu saldo é R$ ${saldoFinal.toFixed(2)}`)
    } else {
         console.log(`Seu saldo é negativo, o valor total do seu saldo é R$ ${saldoFinal.toFixed(2)}`)
    }

    //return console.log(saldoFinal)
}

saldo(receitaTotal, despesasTotal)