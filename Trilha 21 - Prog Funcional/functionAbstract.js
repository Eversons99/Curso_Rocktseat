class Parafuso { // Superclasse - Abstrata
	construtctor() {
		if (this.constructor === Parafuso)
			throw new Error ('Classe abstrata não pode ser instânciada')
	}
	get tipo() {
		throw new Error ('Método "get tipo()" precisa ser implementado')
	}
}


// Criando a class Fenda que herdará funcionalidade da classe Parafuso
class Fenda extends Parafuso {
	constructor () { super () }

	get tipo () {
		return 'Chave de fenda'
	}
}

// Criando a class Philips que herdará funcionalidade da classe Parafuso
class Philips extends Parafuso {
	constructor () { super () }

	get tipo () {
		return 'Chave Philips'
	}
}


class Allen extends Parafuso {}

// Criando instâncias e usando
new Parafuso () // Irá gerar um erro pois estou tentando instanciar uma class abstrata


let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo)
console.log(allen.tipo)