let temperature = 37 
/*
if(temperature >= 37.0) {
    console.log('Pessoa com febre')
}else{
    console.log('Pessoa sem febre')
}

*/
if(temperature > 37.5) {
    console.log('Febre alta')
}else if (temperature >= 37.0 && temperature <= 37.5){
    console.log('Febre moderada')
}else{
    console.log('Saudável')
}