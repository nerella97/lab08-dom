# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|---|---|---|
| textContent desde app.js | El texto del título `<h1>` cambió a "Hola TECSUP". | Sí, porque la instrucción está guardada en app.js y se ejecuta cada vez que se carga la página. |
| style.color | El color del texto del título `<h1>` cambió a azul. | Sí, porque también está escrita en app.js y se vuelve a aplicar al recargar. |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|---|---|---|
| click | Presionar y soltar el botón izquierdo del mouse (un solo clic) sobre el botón. | 1 (suma 1 cada vez que haces clic). |
| dblclick | Hacer doble clic rápido con el mouse sobre el botón. | 1 (suma 1 por cada doble clic completo). |
| mouseover | Pasar el cursor del mouse por encima del área del botón (sin hacer clic). | 1 (suma 1 cada vez que el puntero entra al botón). |

`evento.type` mostró el nombre del evento ocurrido como texto: "click", "dblclick" o "mouseover".

`evento.target` mostró el elemento HTML que recibió la acción, en este caso el botón `<button id="btnSumar">Sumar 1</button>`.

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El texto del saludo cambió en tiempo real letra por letra mostrando "Hola, Victoria". | No |
| Enviar sin preventDefault | El texto "Enviado" apareció un instante y desapareció; la página se recargó y el campo de correo quedó vacío. | Sí |
| Enviar con preventDefault, correo sin @ | Apareció en rojo el mensaje "Correo no valido: falta @". | No |
| Enviar con preventDefault, correo con @ | Apareció el mensaje "Enviado: victoria@tecsup.pe" y el texto se mantuvo en pantalla. | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|---|---|---|---|
| laptop | "Laptop" | 2500 | 1875 |
| mouse | "Mouse" | 45 | 33.75 |
| teclado | "Teclado" | 120 | 90 |
| monitor |
