// SISTEMA DE MÓDULOS
// Razones: 

// 1. Encapsulamiento
// Todo lo que pasa en un pedaso de código tiene que se local a ese código, de esa manera desacoplamos
// nuestro código y cada parte se hace responsable de cumplir una tarea. Cada módulo debe ser pequeño y 
// encargarse de una sola responsabilidad.

// 2. Dependencias
// Para que podamos requerir módulos de otros módulos y hacer nuestro código más limpio.

// ¿Qué es un módulo?
// Un paquete de código, que puede tener dependencias y un poco de código fuente.
// pedaso que código que se encarga de resolver un problema

// Módulos de que existen
// 1. Function Scope
// Encapsular código en el scope de una función (llamar como módulo), no funciona tanto para el lado de dependencias.

// 2. Common.js
// Nos permite escribir modulo.export y exportar una función, objeto o más de una cosa (export.atributo)
// Sincrono
// Se debe tener una libreria para ensamblar todo.

// 3. AMD
// Si nos permite escribir módulos asincronos
// Sintaxis no tan linda
//  

// 4. Módulos de ES 2015
// Hacemos import y export en cada módulo.

// 5. System-js
// Universal
// Sincronos y asincronos
// 