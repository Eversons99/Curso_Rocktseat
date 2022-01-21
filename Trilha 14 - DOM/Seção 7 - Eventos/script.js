// Eventos
// um evento é disparado sempre que ocorre uma ação, por exemplo um clique em um elemento

// Ao meu elemento html eu adicionei o evento onclick que disparará essa função sempre que alguem clicar sobre o meu elemento 
function print(){
    console.log('Print, dois beijouou')
}


// onkeydown, esse evento é disparado sempre que alguem pressiona uma tecla no meu input 


// onkeyup, esse evento é disparado sempre que alguem solta uma tecla pressionada no meu input 
const input = document.querySelector('input')

input.onkeyup = function() {
    console.log('Rodei')
}



const h1 = document.querySelector('h1')

// addEventListener é um "ouvidor de eventos"
// Nesse caso abaixo passei como paramenro um click, e sempre que houver um click sobre o meu elemento eu vou chamar a função print
h1.addEventListener('click', print)

h1.addEventListener('mouseover', print)

//Argumento EVENT

const input2 = document.querySelector('input')

input2.onkeypress = function(event){
    console.log(event.key)
}