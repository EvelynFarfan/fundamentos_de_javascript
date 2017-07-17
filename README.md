# FUNDAMENTOS DE JAVASCRIPT

## var
Ahora la señal más débil disponible cuando se define una variable en JavaScript. La variable puede o no puede ser reasignada, y la variable puede o no puede ser utilizada para una función completa, o simplemente con el propósito de un bloque o bucl

## let
Es una señal de que la variable puede ser reasignada, como un contador en un bucle, o un swap de valor en un algoritmo. También señala que la variable sólo se utilizará en el bloque en el que está definido , lo que no siempre es la función que contiene todo.

## const
El indentificador no puede ser reasignado.

## Hay tres formas de crear objetos:

**1.** Creando una función y usando prototipos.

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

**2.** Creando un objeto y usando Createobject() / Declarar objetos con Object.create.

```javascript
const Punto = {
	init: function(x, y){
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x) {
		this.x += x
	},
	moverEnY: function moverEnY(y) {
		this.y += y
	},
	distancia: function distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x * x + y * y)
	}
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)

p1.init(0, 4)
p2.init(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))

```

**3.** Creando una clase y creando una instancia de la misma. / Sintaxis Sugar / Declarar objectos con class

```javascript
class Punto {
	constructor(x, y){
		this.x = x
		this.y = y
	}
	moverEnX(x){
		this.x += x
	}
	moverEnY(y){
		this.y += y
	}
	distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y
		return Math.sqrt(x * x + y * y)
	}
}

const p1 = new Punto (0, 4)
const p2 = new Punto (3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))
```

## Scope de las variables
Conjunto de variables o funciones a las cuales podemos acceder en una derterminada linea de código.

## Hosting
Eleva las variables(var) a primera instancia

## Closes
Funciones que revuerdan el scope (entorno) en el cual fueron creadas y pueden acceder a todas las variables, funciones que pertenecen a ese scope, pero con los valores que tienen esas variables, funciones al momento momento en que invocamos a la función closes.