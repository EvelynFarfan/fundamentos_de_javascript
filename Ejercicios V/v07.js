const born = new Date (1993, 8, 12)
const hoy = new Date ()
const tiempo = hoy - born
const tiempoSegundos = tiempo / 1000
const tiempoMin = tiempoSegundos / 60
const tiempoHoras = tiempoMin / 60

const nextBirthday = new Date(hoy.getFullYear(), born.getMonth(), born.getDate())

const diasSemana = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado'
]