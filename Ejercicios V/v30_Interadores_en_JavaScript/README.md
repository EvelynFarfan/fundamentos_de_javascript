# ITERADORES EN JAVASCRIPT

Estructura de datos.
Los iteradores basicamente nos permiten hacer listas infinitas de elementos.

Un objeto es un iterador cuando sabe como acceder a los elementos de una colleccion, mientras mantiene un registro de su posición actual dentro de esa secuencia. En JavaScript un iterador es un objeto que proporciona un método next() que devuelve el siguiente elemento en la secuencia. Este método devuelve un objeto con dos propiedades: done y value.

```javascript
function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}
```