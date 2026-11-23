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

evento.type mostró el nombre exacto de la acción ocurrida en formato de texto (por ejemplo, "click", "dblclick" o "mouseover"). Por su parte, evento.target devolvió la referencia completa al elemento HTML específico que recibió la acción, en este caso la etiqueta <button id="btnSumar">Sumar 1</button>.

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El texto del saludo cambió en tiempo real letra por letra mostrando "Hola, Victoria". | No |
| Enviar sin preventDefault | El formulario se envió de forma predeterminada y se perdieron/reiniciaron los cambios hechos en el DOM (como el título azul o los clics). | Sí |
| Enviar con preventDefault, correo sin @ | Se detuvo el envío del formulario y apareció un mensaje de error o alerta indicando que el correo no es válido (falta el @). | No |
| Enviar con preventDefault, correo con @ | Se detuvo el envío tradicional, se validó el correo correctamente y se mostró el mensaje de confirmación o envío exitoso en pantalla. | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|---|---|---|---|
| laptop | "Laptop" | 2500 | 1875 |
| mouse | "Mouse" | 45 | 33.75 |
| teclado | "Teclado" | 120 | 90 |

Usar una clase evita repetir código al estandarizar la estructura y los cálculos de cada producto desde un solo lugar. Además, permite escalar la página dinámicamente: al agregar nuevos objetos en JavaScript, el DOM se actualiza automáticamente sin tener que modificar el archivo HTML.

