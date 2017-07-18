// el contexto -- this -- hace referencia a cierto objeto

class Persona {
	constructor (nombre, amigos = [] ){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos() {
		const _this = this
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
		})
	}
}
const sacha = new Persona('Sacha',  ['Pedro', 'Juan', 'Pepe'])



class Persona {
	constructor (nombre, amigos = [] ){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos() {
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		}.bind(this))
	}
}
const sacha = new Persona('Sacha',  ['Pedro', 'Juan', 'Pepe'])



class Persona {
	constructor (nombre, amigos = [] ){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos() {
		this.amigos.forEach((amigo) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		})
	}
}
const sacha = new Persona('Sacha',  ['Pedro', 'Juan', 'Pepe'])