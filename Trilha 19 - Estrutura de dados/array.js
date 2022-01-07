const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0])
console.log(pilotos[2])

/*O lengthmostra o total de elementos de um array*/
console.log(pilotos.length)

for (let piloto of pilotos){
    console.log(piloto)
}

//adicionar elemento ao arrays
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'senna')
console.log(senna)

// deletar um elementos de um array
pilotos.splice(1, 1)
console.log(pilotos)