/* 
    Buscando e contatndo dados em Arrays

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

// Contar o número de categorias e o número de livros em cada categoria

let contagemCategory = booksByCategory.length
console.log(`Temos o total de ${contagemCategory} categorias`)


// Estou pegando o primeiro objeto e de booksByCategory e atribuindo a category
for(let category of booksByCategory) {
    // Estou pegando o primeiro objeto e de booksByCategory que foi atribuido a category e acessando a propriedade category
    console.log(`Total de livros da categoria: ${category.category}`)
    console.log(category.books.length)
}

// Contar o número de autores

function countAuthors() {
    let authors = []

    for(let category of booksByCategory){
        for( let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log(`O total de autores é ${authors.length}`)
}

countAuthors();

// Mostrar livros do autor Agusto Cury
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

//Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
