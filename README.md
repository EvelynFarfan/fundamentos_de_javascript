# FUNDAMENTOS DE JAVASCRIPT

## var
Ahora la señal más débil disponible cuando se define una variable en JavaScript. La variable puede o no puede ser reasignada, y la variable puede o no puede ser utilizada para una función completa, o simplemente con el propósito de un bloque o bucl

## let
Es una señal de que la variable puede ser reasignada, como un contador en un bucle, o un swap de valor en un algoritmo. También señala que la variable sólo se utilizará en el bloque en el que está definido , lo que no siempre es la función que contiene todo.

## const
El indentificador no puede ser reasignado.

## Hay tres formas de crear objetos:

1. Creando una función y usando prototipos.

```javascript
function Punto(x, y){
	this.x = x
	this.y = y
}
Punto.prototype.moverEnX = function moverEnX(x){
	this.x += x
}
Punto.prototype.moverEnY = function moverEnY(y){
	this.y += y
}
Punto.prototype.distancia = function distancia(p){
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.sqrt(x * x + y * y)
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))

```

2. Creando un objeto y usando Createobject().
3. Creando una clase y creando una instancia de la misma. 