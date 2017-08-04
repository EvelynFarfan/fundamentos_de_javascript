// PROMESAS
// son basicamente son objetos
// en el constructor pasamos una funcion 

// const promise =  new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		reject(new Error(`Se produjo un error`)
// 	}, 1000)
// })
// promise
// 	.theme(function(){

// 	})
// 	.catch(function(err){

// 	})

function get(URL){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			const DONE = 4
			const OK = 200
			if (this.readyState === DONE) {
				if(this.status === OK){
					// resolve significa que se hizo todo bien
					resolve(JSON.parse(this.responseText))
				}else {
					//reject solo enviar el error
					reject(new Error(`Se produjo un error al realizar el request ${this.status}`))
				}
			}
		}
		xhr.open('GET', URL);
		xhr.send(null);
	})
}
/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`)
}
let luke
get('http://www.swapi.co/api/people/1/')
	.then((response) => {
		luke = response
		return get(luke.homeworld)
	})
	.then((homeworld) => {
		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
	.catch(err => handleError(err))

// FETCH - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function get(URL){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			const DONE = 4
			const OK = 200
			if (this.readyState === DONE) {
				if(this.status === OK){
					// resolve significa que se hizo todo bien
					resolve(JSON.parse(this.responseText))
				}else {
					//reject solo enviar el error
					reject(new Error(`Se produjo un error al realizar el request ${this.status}`))
				}
			}
		}
		xhr.open('GET', URL);
		xhr.send(null);
	})
}
/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`)
}
let luke
fetch('https://www.swapi.co/api/people/1/')
	.then(response => response.json())
	.then((json) => {
		luke = json
		return fetch(luke.homeworld)
	})
	.then(response => response.json())
	.then((json) => {
		luke.homeworld = json
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
	.catch(err => handleError(err))