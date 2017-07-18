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
console.log(p1.distancia(p2)
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

## This
Cuando this es invocado dentro de un método, implícitamente este hace referencia al objeto que contiene el método, sin importar si el método es añadido luego de haber sido creado el objeto, o si es una función que retorna un objeto.

> Asignación explícita
En el caso de asignación implícita, this hace referencia al objeto, que contenía el método donde se invoca this, pero si tenemos una función y deseamos explícitamente asignarle a que va a hacer referencia this, desde ES5 contamos con los métodos call(), apply() y bind().

```javascript
const hablar = function(l1, l2, l3) {
  console.log(`Hola mi nombre es ${this.nombre}
               y se programar en ${l1}, ${l2}, ${l3}.`);
};
const yeison = {
  nombre: ‘Yeison’,
  edad: 22
};
const lenguajes = [‘JavaScript’, ‘Python’, ‘C’]
```
### call()
```javascript
hablar.call(yeison, lenguajes[0],lenguajes[1],lenguajes[2]);
```

El método call nos permite definir a que va a hacer referencia this, en su primer parámetro, los parámetros siguientes son los parámetros que recibe la función.


### apply()
```javascript
hablar.apply(yeison, lenguajes);
```
El método apply, funciona igual que call, permitiendo referencia this en el primer parámetro, pero este nos permite pasar un array, como los parámetros de la funcion.


### bind()
Este método funciona diferente a los anteriores, este nos devuelve una función, en dónde this, hace referencia al objeto que pasamos en su parámetro.

```javascript
const hablaYeison = hablar.bind(yeison,
lenguajes[0],lenguajes[1],lenguajes[2]);

hablaYeison();
```

### Asignación con new
Otro caso, es cuando invocamos this en un constructor , como el siguiente ejemplo:

```javascript
let Animal = function(color, nombre, tipo) {
 this.color = color;
 this.nombre = nombre;
 this.tipo = tipo;
}
const bipa = new Animal(‘gris’, ‘Bipa’, ‘Felino’);
```
En este caso, this hace referencia al objeto que se instanciando.
Aquí el código del ejemplo, para que puedas modificarlo y ver cómo funciona.

``` javascript
class Persona {
	constructor (nombre, amigos = [] ){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos() {
		// cuando se define una arrow function dentro de cuerpo de esa función "this" va a tomar el valor que tiene "this" fuera del contexto en el cual fue declarada la función.
		this.amigos.forEach((amigo) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		})
	}
}
const sacha = new Persona('Sacha',  ['Pedro', 'Juan', 'Pepe'])
```