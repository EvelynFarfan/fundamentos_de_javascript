setTimeout(function callback(){
	console.log('Ya pasó un segundo')
}, 1000)
// ----------------------------------------------------

setTimeout(function callback(){
	console.log('Ya pasaron 3 un segundo')
}, 3000)
console.log('Hola')
// ---------------------------------------------------

setTimeout(function (){
	console.log('A')
}, 0)
console.log('B')
// ---------------------------------------------------
 
setTimeout(function (){
	console.log('A')
}, 1000)

for (let i = 0; i < 999999; i++)

console.log('B')

// JS ejecuta código de manera asincrona
// operaciones asincronas tiene que reducirse a los maximos (setTimeout, request, )