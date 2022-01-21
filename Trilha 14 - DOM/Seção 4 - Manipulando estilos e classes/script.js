// Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#F9F3D2" // Atribuindo um background para o body

console.log(element.style.backgroundColor) // pegando o valor e mostrando no console

//classList, nós permite adicionar e remover classes de um elemento
element.classList.add('activate') // Adicionado a class activate com o add

element.classList.remove('activate') // Removendo a class activate com o remove

element.classList.toggle('activate') // O toogle funciona como um djuntor, se a class existir ele remove e se ela não existir ele adiciona ela ao elemento 
