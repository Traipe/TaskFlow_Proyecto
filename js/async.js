// 3) Funciones asincronicas

// Simular retardo
setTimeout(() => console.log("Tarea agregada con retardo..."), 2000);

// Notificación
setTimeout(() => alert("¡Nueva tarea creada!"), 2000);

// Contador regresivo
function contador(segundos) {
  const interval = setInterval(() => {
    console.log(`Quedan ${segundos} segundos`);
    segundos--;
    if (segundos < 0) clearInterval(interval);
  }, 1000);
}
contador(5);