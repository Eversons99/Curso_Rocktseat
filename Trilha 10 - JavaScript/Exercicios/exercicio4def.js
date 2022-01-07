/*  Buscando e contatndo dados em Arrays

    Beseado no Array de livros por Categorias abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Agusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/ 

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligência Emocial",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    }    
]


// Contar o número de categorias 
let countCategory = booksByCategory.length
console.log(`O total de categoria (as) é ${countCategory}`)

// Contar número de livros em cada categoria

// Estou pegando o obj catogory do array booksByCategory
for( let category of booksByCategory){
    // Dentro do objeto category estou acessando a propriedade books e verificando o tamanho da mesma como lenght
    console.log(`O total de livros na categoria ${category.category} é ${category.books.length}`)
}

// Contar o número de autores

function countAuthors (){
    let authors = []    
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log(`A quantidade de autores é ${authors.length}`)
}

// Mostrar livros do autor Augusto Cury
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for( let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Stephen R. Covey')
