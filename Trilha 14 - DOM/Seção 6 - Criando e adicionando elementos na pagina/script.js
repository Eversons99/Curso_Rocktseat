// Criando e adicionado elementos ao HTML

// createElement, cria um elemento

const div = document.createElement('div')

div.innerText = "Olá seu corno"

// append e prepend, adicionam o elemento à página

// O append adiciona o elemento na após o ultimo elemento

// prepend adiciona o elemento antes do primeiro elemento

// Nesse caso estou me "conectando" ao HTML com o body e dentro do body estou adicionando (append(div)) após o ultimo filho o body
const body = document.querySelector('body')

//body.append(div)

body.prepend(div)
