// Hace un fetch y revisa los errores comunes. Se usa en las dos consultas
// para no repetir las mismas ramas de error.
async function consultar(url) {
  let respuesta;
  try {
    respuesta = await fetch(url);
  } catch (error) {
    // Rama 1: fetch solo rechaza la promesa cuando falla la red
    // (sin internet, DNS caído, etc.), no cuando el servidor responde con error.
    throw new Error("No hay conexión a internet. Revisa tu red.");
  }

  // Rama 3: el servidor respondió 429 (Too Many Requests): hay que esperar.
  // Se revisa antes que response.ok porque 429 también lo haría falso.
  if (respuesta.status === 429) {
    throw new Error("Demasiadas consultas. Espera unos minutos.");
  }

  // Rama 4: cualquier otra respuesta fuera del rango 200-299 (500, 404, etc.).
  if (!respuesta.ok) {
    throw new Error("Error al consultar el clima. Intenta más tarde.");
  }

  return respuesta.json();
}

// Obtiene el clima actual de una ciudad usando la API de Open-Meteo.
async function obtenerClima(ciudad) {
  // Paso 1: geocodificación. Convertimos el nombre de la ciudad en
  // coordenadas (latitud y longitud). count=1 pide solo el mejor resultado.
  const urlGeo =
    "https://geocoding-api.open-meteo.com/v1/search" +
    `?name=${encodeURIComponent(ciudad)}&count=1&language=es&format=json`;
  const datosGeo = await consultar(urlGeo);

  // Rama 2: si la ciudad no existe, la API responde 200 pero sin la
  // propiedad "results" (o con una lista vacía).
  if (!datosGeo.results || datosGeo.results.length === 0) {
    throw new Error("No encontramos esa ciudad. Intenta con otro nombre.");
  }

  // Tomamos el primer (y único) resultado con las coordenadas y el nombre oficial.
  const lugar = datosGeo.results[0];
  const { latitude, longitude, name } = lugar;

  // Paso 2: pronóstico. Con las coordenadas pedimos las condiciones actuales:
  // temperatura a 2 m del suelo y humedad relativa.
  const urlClima =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${latitude}&longitude=${longitude}` +
    "&current=temperature_2m,relative_humidity_2m";
  const datosClima = await consultar(urlClima);

  // Paso 3: devolvemos solo los datos que necesita la interfaz.
  return {
    ciudad: name,
    temperatura: datosClima.current.temperature_2m,
    humedad: datosClima.current.relative_humidity_2m,
  };
}
