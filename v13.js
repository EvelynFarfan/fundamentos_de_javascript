// var name = "Ana"

// function saludar() {
// 	var name = "Eric"
// 	console.log(`Hola ${name}`)
// }
// saludar()
// console.log(`La  variable name tiene el valor ${name}`)

var name = "Ana"

function saludar() {
	var name
	if(true){
		name = "Eric"
	}
	console.log(`Hola ${name}`)
}
saludar()
console.log(`La  variable name tiene el valor ${name}`)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function saludar10(name){
	for(var i = 0; i < 10; i++){
		console.log(`Hola ${name}`)
	}
	console.log(`El valor de i es: ${i}`)
}
saludar10("Mía")

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function saludar20(name){
	const nombre = "Ana"

	for(let i = 0; i < 10; i++){
		console.log(`Hola ${name}`)
	}
}
saludar20("Mía")