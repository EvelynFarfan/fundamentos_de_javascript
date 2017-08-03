# ASYNC-AWAIT

Las promesas en javascript son una manera de conseguir que el código asíncrono se comporte como si fuera síncrono, facilitándonos la vida enormemente. Sin embargo, esto tiene algunas limitaciones. Async/Await es una propuesta para extender la sintaxis de javaScript con las palabras reservadas async y await, cuyo uso permitirá -cuando se estandarice- tratar las funciones que devuelven promesas en nuestro código como si fueran funciones síncronas que devuelven directamente valores en vez de promesas.

**1.** Async / await es una nueva forma de escribir código asincrónico. Las opciones anteriores para el código asíncrono son callbacks y promesas.

**2.** Async / await es realmente construido en la parte superior de las promesas. No se puede utilizar con callbacks simples o callbacks de nodo.

**3.** Async / await es, como promesas, no bloqueante.

**5.** Async / await hace que el código asincrónico se vea y se comporte un poco más como un código síncrono. Aquí es donde reside todo su poder