const questions = [
    "Como quer que eu te chame?",
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {

    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
   
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit', () => {
    console.log (`
        \n\n Legal ${answers[0]} ! Veja abaixo suas respostas

        O que você aprendeu hoje foi: ${answers[1]}

        O que te aborreceu e você poderia melhorar foi: ${answers[2]}

        O que te deixou feliz foi:  ${answers[3]}

        Você ajudou  ${answers[4]} pessoas hoje, parabens!

        Volte amanhã para novas reflexões
    `)
})