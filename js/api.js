// 4) Consumo de APIs y almacenamientp

import { gestor } from "./dom.js";

// Guardar en localStorage
function guardarLocal() {
  localStorage.setItem("tareas", JSON.stringify(gestor.tareas));
}

// Recuperar de localStorage
function cargarLocal() {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareasGuardadas.forEach(t => gestor.agregarTarea(t));
}

// Obtener tareas desde API externa
async function obtenerTareasAPI() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await res.json();
    data.forEach(t => gestor.agregarTarea({ id: t.id, descripcion: t.title, estado: t.completed ? "completada" : "pendiente" }));
  } catch (error) {
    console.error("Error al obtener tareas:", error);
  }
}

export { guardarLocal, cargarLocal, obtenerTareasAPI };