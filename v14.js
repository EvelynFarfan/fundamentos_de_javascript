// Expreds Operator


// REDUCE
function suma(...sumandos){
	let acum = 0
	console.log(sumandos)
	for (let i = 0; i < sumandos.length; i++){
		acum = sumandos[i]
	}
	return acum
}
suma (4, 8, 12, 8954, 7)

function suma(...numeros){
	// Por cada elemento de un array, va acumulando un valor sobre un acumulador 
	return numeros.reduce(function(acun, numero){
		acun += numero
		return acun
	}, 0)
}
suma (4, 8, 12, 8954, 7)


// MAP
function doble(...numeros){
	const resultado = []
	for(let i = 0; i < numeros.length; i++){
		resultado.push(numeros[i] * 2)
	}
	return resultado
}

function doble(...numeros){
	return numeros.map(function (numero){
		return numero * 2
	})
}

const doble = (...numeros) => numeros.map (numero => numero * 2 )

// FILTER

function pares(...numeros){
	const resultado = []
	for (let i = 0; i < numeros.length; i++){
		const numero = numeros[i]
		if(numero % 2 == 0){
			resultado.push(numero)
		}
	}
	return resultadop
}

function pares(...numeros){
	return numeros.filter( function(numero){
		return numero % 2 == 0 
	})
}