let sacha = { nombre:'Sacha', apellido:'Lifszyc', edad: 26}
let otroSacha = sacha
otroSacha === sacha
otroSacha.edad = 27

sacha
Object {nombre: "Sacha", apellido: "Lifszyc", edad: 27}

function cumpleanos(persona){
	persona.edad++
}
cumpleanos(sacha)

sacha
Object {nombre: "Sacha", apellido: "Lifszyc", edad: 28}

otroSacha
Object {nombre: "Sacha", apellido: "Lifszyc", edad: 28}

let contador = 1
cumpleanos = function(persona){
	contador++
	persona.edad++
}
function (persona){
	contador++
	persona.edad++
}
cumpleanos(sacha)
contador
2

cumpleanos(sacha)
contador
3


cumpleanos = function (persona){
	const clone = Object.assign({}, persona)
	clone.edad++
	return clone
}

cumpleanos(sacha)

Object {nombre: "Sacha", apellido: "Lifszyc", edad: 31}

sacha
Object {nombre: "Sacha", apellido: "Lifszyc", edad: 30}

const sachaviejo = cumpleanos(sacha)
undefined

sachaviejo
Object {nombre: "Sacha", apellido: "Lifszyc", edad: 31}
sacha
Object {nombre: "Sacha", apellido: "Lifszyc", edad: 30}
sacha === sachaviejo
false