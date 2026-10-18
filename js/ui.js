// Funciones para actualizar la interfaz. Son globales (sin export) porque
// los scripts se cargan con <script> normales y comparten el mismo ámbito.
//
// Se usa textContent y no innerHTML porque textContent trata el valor como
// texto plano: si contiene etiquetas HTML (por ejemplo un nombre de ciudad
// o un mensaje con "<script>"), se muestran tal cual y no se ejecutan.
// innerHTML las interpretaría como HTML, lo que abre la puerta a ataques XSS.

// Muestra el clima en el div "resultado" y borra cualquier error anterior.
function mostrarClima(datos) {
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");

  resultado.textContent =
    `Clima en ${datos.ciudad}: ${datos.temperatura} °C, humedad ${datos.humedad}%`;
  error.textContent = "";
}

// Muestra un mensaje en el div "error" y borra cualquier resultado anterior.
function mostrarError(mensaje) {
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");

  error.textContent = mensaje;
  resultado.textContent = "";
}

// Deja vacíos los dos divs.
function limpiar() {
  document.getElementById("resultado").textContent = "";
  document.getElementById("error").textContent = "";
}
