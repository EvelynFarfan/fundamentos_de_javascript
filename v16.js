Variables

no son fuertemente tipadas

// valores primitivos

var sacha = 'Sacha'
sacha = 26
sacha = new Date ()

// valores un poco más complejo

sacha = function saludar (){ alert ('Hola')}


// Variable como objeto

sacha = {

	nombre: 'Sacha',
	apellido: 'Lifszyc',
	edad: 26,
	saludar : function saludar(){
		alert(`Hola, me llamo ${this.nombre} ${this.apellido}`)
	}
} 


// Variable no tan variable ...
