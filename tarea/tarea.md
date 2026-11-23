# Tarea: Mi componente interactivo

## Componente elegido
Gestor interactivo de tareas pendientes (`Tarea`), que permite registrar actividades con un nivel de prioridad (Alta, Media o Baja) y eliminarlas dinámicamente de la lista.

## Codigo principal

```js
class Tarea {
    constructor(titulo, prioridad) {
        this.titulo = titulo;
        this.prioridad = prioridad;
    }

    resumen() {
        return `${this.titulo} [Prioridad: ${this.prioridad}]`;
    }
}

const listaTareas = document.querySelector("#listaTareas");
const formTarea = document.querySelector("#formTarea");
const inputTitulo = document.querySelector("#inputTitulo");
const selectPrioridad = document.querySelector("#selectPrioridad");

function mostrarTarea(tareaObj) {
    const li = document.createElement("li");
    li.textContent = tareaObj.resumen();

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.classList.add("btn-borrar");

    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
}

const t1 = new Tarea("Terminar laboratorio 08", "Alta");
const t2 = new Tarea("Subir repositorio a GitHub", "Media");
mostrarTarea(t1);
mostrarTarea(t2);

formTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nuevaTarea = new Tarea(inputTitulo.value, selectPrioridad.value);
    mostrarTarea(nuevaTarea);
    
    inputTitulo.value = "";
});
```
## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|---|---|---|
| Cargar la página `tarea/index.html` | Se muestran las 2 tareas iniciales de prueba con su prioridad y botón "Eliminar". | Si |
| Escribir un título, elegir prioridad y presionar "Agregar" (`submit`) | Se crea un nuevo objeto `Tarea`, se agrega a la lista sin recargar la página y se limpia el campo de texto. | Si |
| Hacer clic en el botón "Eliminar" de una tarea (`click`) | El elemento `<li>` correspondiente desaparece inmediatamente del DOM. | Si |

## Por que disene asi mi clase

Elegí los atributos titulo y prioridad porque representan los datos esenciales para identificar y clasificar cualquier actividad pendiente. El método resumen() permite formatear ambos valores en una sola cadena legible, evitando repetir esa lógica de texto cada vez que se crea un nuevo elemento en el DOM.