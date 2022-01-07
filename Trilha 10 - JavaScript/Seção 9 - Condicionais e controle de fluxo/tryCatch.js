// throw (disparar/lançar)

function sayMyName (name = ''){
    if (name === ''){
        throw "Nome é obrigatório"
    }
    console.log('Depois do erro')
}



// try (tentar) ... catch (capturar)
try {
    sayMyName('')
}catch(e){
    console.log(e)
}