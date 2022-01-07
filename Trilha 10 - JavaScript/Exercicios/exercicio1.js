/* Transformar notas escolarares

   Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C
*/
/*
* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
*/

function nota(notaEntrada){
    let nota = notaEntrada

        if(nota >= 90 && nota <=100){
            console.log('NOTA A')
        }else if(nota >=80 && nota <=89){
            console.log('NOTA B')
        }else if(nota >=70 && nota <=79){
            console.log('NOTA C')
        }else if(nota >=60 && nota <=69){
            console.log('NOTA D')
        }else if(nota >= 0 && nota < 60 ){
            console.log('NOTA F')
        }else{
            console.log('Nota invalida')
        }
}

nota(101)
nota(-1)
nota(0)
nota(1)
nota(45)
nota(60)
nota(61)
nota(75)
nota(85)
nota(95)

