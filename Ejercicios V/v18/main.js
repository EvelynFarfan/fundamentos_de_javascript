// La Funcion Bind

class Toggable {
	constructor(el){
		// inicializar el estado interno
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false
		this.onclick = this.onClick.bind(this)
		this.el.addEventListener('click', this.onClick)
	}
	onClick(ev){
		console.log('esto es lo que tiene this' + this)

		// cambiar estado interno
		this.activated = !this.activated
		// Llamar a toggleText
		this.toggleText()
	}
	toggleText(){
		// cambiar el texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}
const button = document.getElementById('boton')
// mi boton va a adquirir las caracteristicas de la clase Toggable
const miBoton = new Toggable(button)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function saludar (nombre, apellido){
	console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Sacha', 'Lifszyc')

const saludarSachas = saludar.bind(null, 'Sacha')

