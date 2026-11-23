# lab08-dom
Bitacora de JavaScript interactivo: DOM, eventos y objetos

- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Documentacion de la tarea](notas/TAREA.md)
- [Ver la pagina en vivo (Parte guiada)](https://nerella97.github.io/lab08-dom/)
- [Ver la pagina de la tarea en vivo](https://nerella97.github.io/lab08-dom/tarea/)

## Código Principal (`tarea/app.js`)

```javascript
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

formTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nuevaTarea = new Tarea(inputTitulo.value, selectPrioridad.value);
    mostrarTarea(nuevaTarea);
    inputTitulo.value = "";
});