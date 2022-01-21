// Manipulando o conteúdo 
// textContent, manipula o conteudo de texto do html em questão

const element = document.querySelector('h1')

element.textContent += " Everson"

console.log(element.textContent)

// innerText, altera o texto interno do html
element.innerText = "Alô"

// innerHTMK, altera/insere mais html no elemento

element.innerHTML = "Bla bla <b>alo</b>"


const element2 = document.querySelector('input')

// Value nos ajuda a pegar e atribuir valores, por exemplo a um input

element2.value = "Valor que eu quiser"

