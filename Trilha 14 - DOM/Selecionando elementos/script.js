// getElementById(), pega o elemento HTML pelo id, esse método da DOM retorna o elemento html completo EX:   <h1 id="blog-title">Meu blogs</h1>. 


const element = document.getElementById('blog-title')
console.log(element)

// getElementsByClassName(), pega os elemento pela classe, retorna um HTMLCollection

const element = document.getElementsByClassName('one')
console.log(element)

// getElementsByTagName(), pega os elementos pelo nome dos mesmos, retorna um HTMLCollection
const element = document.getElementsByTagName('h1')
console.log(element)

// QuerySelector, pega o elemento pelo seletor, retorna o elemento html completo EX:   <h1 id="blog-title">Meu blogs</h1>. 
const element = document.querySelector('h1')
console.log(element)

// QuerySelectorAll, pega o elemento pelo seletor css (class e id) não precisa de . ou #, retorna uma lista de nós (Nodelist)
const element = document.querySelectorAll('one')
console.log(element)