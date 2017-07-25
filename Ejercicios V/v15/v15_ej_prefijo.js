function prefijoDes(words){
	console.log(`Des${words}`)
}

function prefijos(prefijo){
	return function unirPrefijo(words){
		console.log(`${prefijo}${words}`)
	}
}


const prefijos = (prefijo) => unirPrefijo = (words) => console.log(`${prefijo}${words}`)
prefijos = (prefijo) => unirPrefijo = (words) => console.log(`${prefijo}${words}`)

const prefijoDes = prefijos('Des')
const prefijoSuper = prefijos('Super')

prefijoDes('motivado')
prefijoDes('empleado')
prefijoDes('proporcionado')

prefijoSuper('motivado')
prefijoSuper('empleado')
prefijoSuper('proporcionado')