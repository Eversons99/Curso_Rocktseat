// Estutural
/*
let altura = 50
let largura = 60 
function calculaArea() {
    return altura * largura
}

let area = calculaArea()
*/

// Mesmo codigo Orientado a Objetos
// this faz refêrencia ao objeto que sera instanciado a partir desta class
class Poligono {
        //Constructor ajudara na criação de um novo obj 
        // Em uma classe pode existir apenas um método constructor
        constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
    
    get area () {
        //Usamos o hashtag para indicar que a function não pode ser vista e acessada fora da class
        return this.#calculaArea()
    }

    #calculaArea(){
        return this.altura * this.largura
    }

}
// Instânciando o obj poligono a partir da class Poligono
let poligono = new Poligono(50,60)
console.log(poligono)
console.log(poligono.area)
