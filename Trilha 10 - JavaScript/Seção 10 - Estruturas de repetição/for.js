// Estrutura de repetição (FOR(PARA))


for(let i = 0; i < 10; i++){
    if(i === 3){
        break; // Para o loop
    }
    console.log(i)
}

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue; // Pula a execução do momento
    }
    console.log(i)
}