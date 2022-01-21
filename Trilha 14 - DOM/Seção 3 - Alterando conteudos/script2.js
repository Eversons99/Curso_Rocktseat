
//Manipuando atributos dos elementos

const header = document.querySelector('header')

header.setAttribute('id', 'header') //setAttribute, gera um atributo, nesse caso o atributo é ID e o valor é o header

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class')) //getAttribute, permite pegar um atributo, neste caso id

header.removeAttribute('id') // removeAttribute, remove atributos
header.removeAttribute('class')
console.log(header)


header.setAttribute('class', 'bg header')