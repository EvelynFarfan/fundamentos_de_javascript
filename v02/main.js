// área de un triangulo
// console.log("El área de un triángulo de base 5 y altura 7 es:" + 5*7/2);
// console.log(`El área de un triángulo de base 5 y altura 7 es:  ${5*7/2}`);

// let base = 5;
// let altura = 7;
// console.log(`El área de un triángulo de base ${base} y altura ${altura} es:  ${base*altura/2}`);


// const ---> no se puede cambiar el valor de la variable;

let base = 5
let height = 7

function triangleArea(base, height){
	return base * height / 2
}
console.log(`El área de un triángulo de base 
	${base} y altura ${height} es:  ${triangleArea(base, height)}`);


// Arrow function
let base = 5
let height = 7
var triangleArea = (base, height) => base*height/2
console.log(`El área de un triángulo de base 
	${base} y altura ${height} es:  ${triangleArea(base, height)}`);


// área de un cuadrado

let lado = 4
let cuadradoArea = (lado) => lado*lado
console.log(`El área de un cuadrado de lado ${lado} es: ${cuadradoArea(lado)}`);