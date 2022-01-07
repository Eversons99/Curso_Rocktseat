/*
    Celsius em fahrenheit


    Crie uma função que receba uma string em celsius ou fahrenheit e faça a tranformação de uma unidade para outra


    C = (F- 32) * 5/9

    F = C * 9/5 + 32

    ENTRADA = ('50F')
*/


function converter (temp) {
    let temperatura = temp.toUpperCase()
    console.log(temperatura)

   if(temperatura.includes('C')) {
        let arraytemp = temperatura.split('C') //Transformmando uma cadeia de caracteres em array
        let newTemp = Number(arraytemp[0])
        
        let F = newTemp * 9/5 + 32

        console.log(`A temperatura digitada em celsius foi ${newTemp} °C, convertida para fahrenheit a nova temperatura é ${F} ºF`)
   } else if (temperatura.includes('F')) {
       let arraytemp = temperatura.split('F')
       let newTemp = Number(arraytemp[0])

       let C = (newTemp - 32) * 5/9

        console.log(`A temperatura digitada em fahrenheit foi ${newTemp} ºF, convertida para celsius a nova temperatura é ${C} °C`)
   } else {
       throw new Error ('O grau digitado não foi identificado') // throw (disparar/lançar)
   }

}


// try (tentar) ... catch (capturar)
try {
    converter('50a') // Chamada da function
} catch (Error) {
    console.log(Error.message) // O message mostra apenas a mensagem do erro e não mostra o erro inteiro
}
