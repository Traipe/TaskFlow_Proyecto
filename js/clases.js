// 1) lógica de POO

// Clase que representa una tarea
class Tarea {
  constructor(id, descripcion, estado = "pendiente", fechaCreacion = new Date()) {
    this.id = id;                // Identificador único
    this.descripcion = descripcion; // Texto de la tarea
    this.estado = estado;        // Estado inicial: pendiente
    this.fechaCreacion = fechaCreacion; // Fecha de creación
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;   // Cambia el estado de la tarea
    console.log(`🔄 Estado cambiado: ${this.descripcion} → ${this.estado}`);

  }
}

// Clase que gestiona todas las tareas
class GestorTareas {
  constructor() {
    this.tareas = []; // Array que guarda las tareas
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea); // Añade nueva tarea
    console.log(`✅ Tarea agregada: ${tarea.descripcion}`);

  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id); // Filtra y elimina por ID
    console.log(`❌ Tarea eliminada con ID: ${id}`);
  }

listarTareas() {
  console.log("📋 Lista de tareas:");
  this.tareas.forEach(t => {
    console.log(`- [${t.estado}] ${t.descripcion} (ID: ${t.id})`);
  });
  return this.tareas; // ✅ Devuelve la lista completa después de imprimir
}
}

// Exportar para usar en otros scripts
export { Tarea, GestorTareas };