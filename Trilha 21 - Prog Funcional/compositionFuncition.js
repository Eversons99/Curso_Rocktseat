const people = ['Rafa', 'Diego', 'Dani', 'Rod']

const upperCasePeopleThatStartsWithD = 
people.filter(person => person.startsWith('D'))
.map (dperson => dperson.toUpperCase())


/* O filter esta recebendo como argumento uma função que recebe o
parâmetro person. StartsWith('D') está verficando se a primeira letra
começa com D*. Map retorna o array com os dados obtidos no filter*/

console.log(upperCasePeopleThatStartsWithD)
