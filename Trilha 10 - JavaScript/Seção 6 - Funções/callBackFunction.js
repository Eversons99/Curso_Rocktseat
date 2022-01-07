//callback function

function sayMyName(name) {
    console.log('Antes de executar a função CallBack')

    name()

    console.log('Depois de executar a callback')
}


sayMyName( 
    () => {
        console.log('Estou em uma callback')
    }
) 

