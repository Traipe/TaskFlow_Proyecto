// 2) Interacción con el DOM y eventos 

import { Tarea, GestorTareas } from "./clases.js";

const gestor = new GestorTareas();
const form = document.getElementById("formTarea");
const lista = document.getElementById("listaTareas");

// Evento submit para agregar tareas
form.addEventListener("submit", e => {
  e.preventDefault();
  const desc = document.getElementById("descripcion").value;

  // Crear nueva tarea con ID único
  const nueva = new Tarea(Date.now(), desc);

  gestor.agregarTarea(nueva);
  renderTareas();
  form.reset();
});

// Función para renderizar tareas en el DOM
function renderTareas() {
  lista.innerHTML = ""; // Limpia lista antes de renderizar

  gestor.tareas.forEach(t => {
    const li = document.createElement("li");

    // ✅ Checkbox para marcar como completada
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = t.estado === "completada";
    checkbox.addEventListener("change", () => {
      t.cambiarEstado(checkbox.checked ? "completada" : "pendiente");
      renderTareas();
    });

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = t.descripcion;

    // Si la tarea está cancelada, se tacha
    if (t.estado === "cancelada") {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    // ❌ Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.addEventListener("click", () => {
      gestor.eliminarTarea(t.id);
      renderTareas();
    });

    // 🚫 Botón cancelar (solo tacha la tarea)
    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.style.marginLeft = "10px";
    btnCancelar.addEventListener("click", () => {
      t.cambiarEstado("cancelada");
      renderTareas();
    });

    // Añadir elementos al <li>
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnEliminar);
    li.appendChild(btnCancelar);

    // Añadir <li> al <ul>
    lista.appendChild(li);
  });
}

export { renderTareas, gestor };