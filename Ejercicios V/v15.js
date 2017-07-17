// Definir una función para definir a todos los mienbros de una familia

function saludarGomez(nombre){
	console.log(`Hola ${nombre} Gomez`)
}

function saludarPerez(nombre){
	console.log(`Hola ${nombre} Pérez`)
}


function saludarFamilia(apellido){
	return function saludarMiembroDeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia('Gómez')
const saludarPerez = saludarFamilia('Pérez')
const saludarRomero = saludarFamilia('Romero')

saludarGomez('Pedro')
saludarGomez('Juan')
saludarGomez('Laura')
saludarGomez('Mónica')

saludarPerez('Pedro')
saludarPerez('Juan')
saludarPerez('Laura')
saludarPerez('Mónica')

saludarRomero('Jorge')


// crear prefijos para las palabras

const prefijoRe = takePrefixes('re')
