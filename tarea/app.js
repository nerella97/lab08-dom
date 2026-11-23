// 1. Clase propia con constructor, 2 atributos y 1 método
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

// Función para crear el elemento en el DOM junto con su botón de borrar
function mostrarTarea(tareaObj) {
    const li = document.createElement("li");
    li.textContent = tareaObj.resumen();

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.classList.add("btn-borrar");

    // Evento 1: click para borrar
    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
}

// Objetos iniciales de prueba
const t1 = new Tarea("Terminar laboratorio 08", "Alta");
const t2 = new Tarea("Subir repositorio a GitHub", "Media");
mostrarTarea(t1);
mostrarTarea(t2);