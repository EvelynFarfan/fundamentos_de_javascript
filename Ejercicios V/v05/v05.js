const nombre = 'Sascha'
const dias =[
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo'
]

function correr(){
	const min = 5
	const max = 15 
	return Math.round(Math.random() * (max - min)) + min
}
let totalKms = 0
const l = dias.length

for (let i = 0; i < l; i++){
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} corrió ${kms} kms`)
}
const promedioKms = totalKms / l
console.log(`En pomedio, ${nombre} corrió ${promedioKms.toFixed(2)}`)