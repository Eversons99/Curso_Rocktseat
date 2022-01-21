// Navegando pelos elementos

// parentNode e parentElement mostra qual é o nó parante do elemento
// primeiro deve-se pegar o elemento com o querySelector por exemplo

const body = document.querySelector('body')

console.log(body.parentNode)


// Navegando pelos elementos filhos
// childNodes mostra todos os elementos filhos e children mostra apenas os elementos filho.
// ChildNodes retorna um NodeList e o children retonra um HTMLCollection que já ignora os espaços que são contados como text pelo childNodes

const el = document.querySelector('body')

console.log(el.childNodes)



// firstChild e lastChield

console.log(el.lastChild)
console.log(el.lastChild)