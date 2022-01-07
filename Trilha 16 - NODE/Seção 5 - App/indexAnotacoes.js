/*Abaixo dentro do obj process irei utilizar a função stdout para
 escrever na saída padrão com o write */
//process.stdout.write("Apenas um test")

const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    /*O process objeto fornece informações e controle sobre o processo atual do Node.js. Embora 
    esteja disponível como global, é recomendável acessá-lo explicitamente por meio de require ou import: */
    process.stdout.write(questions[index] + "\n\n\n")
}

ask()

const answers = []

/*Estou acessando o obj process e o utlizando a function stdin para "receber entradas padrão",
 com a function on eu estou "habilitando o stdin" para ele poder ficar ativo sempre que existir dados = data
 */
/*Caso existam dados(data) irei chamar uma function para escrever na tela */

/*Trim() remove espaços indesejados no início ou fim da frase */
process.stdin.on("data", data => {
    //estu insrindo o dado(data) no meu array (answars) com o push.
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        //A função exit que pertence ao obj process é utilizada para finalizar um processo
        process.exit()
    }
})

