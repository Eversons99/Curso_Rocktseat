/*
    Celsius em fahrenheit


    Crie uma função que receba uma string em celsius ou fahrenheit e faça a tranformação de uma unidade para outra


    C = (F- 32) * 5/9

    F = C * 9/5 + 32

 ENTRADA = ('50F')
    
    Solução do curso !!!
*/



function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    // FLuxo ideal. Conversão de F para C
    let updateDegree = Number(degree.toUpperCase().replace("F", '')) //Estou pegando o valor (degree) passado como parâmetro, substituindo o F/C por nada ('') 
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = ' ºC'
    

    if(celsiusExists) {
    // Fluxo alternativo. Conversão de C para F
    updateDegree = Number(degree.toUpperCase().replace("C", '')) //Estou pegando o valor (degree) passado como parâmetro, substituindo o F/C por nada ('') 
    formula = (celsius) => celsius * 9/5 + 32
    degreeSign = ' ºF'

    }

    return formula(updateDegree) + degreeSign

}


try {
    console.log(transformDegree('5C'))
    
} catch (error) {
    console.log(error.message)
}

// 1° TENTATIVA 
/*
function conversor(valor) {

    let temperatura = valor.toUpperCase()

    if (temperatura.includes("Celsius")) {
        console.log("É 'C'")

        let newTemp = temperatura.split('C')
        console.log(typeof(Number(newTemp[0])))
       
        let C = Number(newTemp[0]) 
        let F = C * 9/5 + 32
        console.log(F);
    }
    else if (temperatura.includes("F")){

        console.log("É 'Fahrenheit'")

        let newTemp = temperatura.split('F')
        console.log(typeof(Number(newTemp[0])))
       
        let F = Number(newTemp[0])  
        let C = (F - 32) * 5/9
        console.log(C);

    }
    else
    {
        console.log('Tipo não válido')
    }

    let array = temperatura.split('C')
    console.log(array)
    console.log(array.splice(0, 2))

    if(temperatura.includes("C") == true){
        let C = Number(temperatura) 
        let F = C * 9/5 + 32
        console.log(F);
        
    }else if (temperatura.includes("F") == true){
        let F = temperatura 
        let C = (F - 32) * 5/9
    }

}   


conversor('50f')
*/