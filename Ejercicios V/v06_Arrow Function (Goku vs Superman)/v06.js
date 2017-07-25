let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12


const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0 

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

const gokuSigueVivo = () => vidaGoku > 0

let round = 0

// Mientras se cumpla una condición , hasta que sea falsa
while (ambosSiguenVivos()){
	round++
	console.log(`Round ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if(golpeGoku > golpeSuperman){
		// ataca goku
		console.log(`Goku ataca a superman con un golpe de ${golpeGoku}`)
		vidaSuperman -= golpeGoku
		console.log(`Superman queda en ${vidaSuperman} de vida`)
	}else {
		// ataca superman
		console.log(`Superman ataca a Goku coon un golpe de ${golpeSuperman}`)
		vidaGoku -= golpeSuperman
		console.log(`Goku queda en ${vidaGoku} de vida`)
	}
}

if(gokuSigueVivo()){
	console.log(`Goku ganó la pelea. Su vida es de ${vidaGoku}`)
}else{
	console.log(`Superman ganó la pelea. Su vida es de ${vidaSuperman}`)
}