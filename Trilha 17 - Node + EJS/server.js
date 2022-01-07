const express = require('express'); // Importando o express

const app = express() //Instanciando o express e guardando na variavel app

/* Utilizando a function set do express e passandos os parametros"view engine", "ejs" 
O view engina esta indicando o express que a nossa ferramento de vizualição ira reinderizar o ejs 
*/ 
app.set("view engine", "ejs")

//Criando uma rota
app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
    },
    { 
        title: "E",
        message: "JS usa JS para reinderizar HTML"
    },
    { 
        title: "M",
        message: "uito fácil de usar"
    },
    { 
        title: "A",
        message: "morzinho"
    },
    { 
        title: "I",
        message: "nstall EJS"
    },
    { 
        title: "S",
        message: "intaxe simples"
    }
    ]
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
        
    });
})

//Criando uma rota
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080)
console.log('Rodando');