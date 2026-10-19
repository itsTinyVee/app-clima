// Conecta el formulario con la consulta del clima.
// Depende de funciones globales de api.js (obtenerClima) y ui.js
// (mostrarClima, mostrarError, limpiar), que se cargan antes en index.html.

// Paso 1: obtenemos el formulario y el input de la ciudad.
const formulario = document.getElementById("formulario");
const inputCiudad = document.getElementById("ciudad");

// Paso 2: escuchamos el envío del formulario (clic en "Consultar" o Enter).
formulario.addEventListener("submit", async (event) => {
  // Por defecto, enviar un formulario recarga la página (o navega a otra URL).
  // preventDefault() cancela ese comportamiento para que la consulta se haga
  // con JavaScript sin perder lo que hay en pantalla.
  event.preventDefault();

  // Paso 3: leemos el valor y quitamos espacios al inicio y al final.
  // Si queda vacío, avisamos al usuario y no hacemos ninguna consulta.
  const ciudad = inputCiudad.value.trim();
  if (ciudad === "") {
    mostrarError("Escribe el nombre de una ciudad.");
    return;
  }

  // Paso 4: limpiamos antes de consultar para que el resultado o el error de
  // la búsqueda anterior no sigan visibles mientras esperamos la respuesta
  // (podrían confundirse con los de la nueva ciudad).
  limpiar();

  try {
    const datos = await obtenerClima(ciudad);
    // Paso 5a: la consulta tuvo éxito, mostramos el clima.
    mostrarClima(datos);
  } catch (error) {
    // Paso 5b: obtenerClima lanza Errors con mensajes listos para el usuario
    // (sin conexión, ciudad no encontrada, etc.), así que los mostramos tal cual.
    mostrarError(error.message);
  }
});
