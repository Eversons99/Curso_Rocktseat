// Adicionando elementos

// Criando uma div
const div = document.createElement('div')
div.innerText = "Olá, é apenas um teste"

//inertBefore, insere o elemento antes um elemento selecionado, abaixo por exemplo estou inserindo o elemento div antes o elemento script

const body = document.querySelector('body')
const script = document.querySelector('script')

body.insertBefore(div, script)



// Não existe um insertAfter mas é possível inserir um elemento depois de um especifico

// Criando um elemento p
const p = document.createElement('p')

const header = document.querySelector('header')


p.innerText = "Este é o meu P"

// Agora estou inserindo o meu p antes do proximo elemento do header
body.insertBefore(p, header.nextElementSibling)